import React, { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import userTypes from "../types/userTypes";
import LoaderScreen from "../app/components/common/Loader";
import { getApi, putApi } from "../functions/API";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// Define types
interface UserData {
  // Define your user data structure here
}
interface withdrawDataTypes {
  totalWithdraw: number;
  percentageLastMonthWithdraw: number;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  userData: userTypes | null;
  isLoading: boolean;
  isAdmin: boolean;
  reloadAuth: () => void;
  purchasePackageData: any;
  withdrawData: withdrawDataTypes;
  setPurchasePackageData: (v: any) => void;
  setWithdrawData: (v: any) => void;
  topData: any;
  setTopData: (v: any) => void;
}

// Create context
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userData: null,
  isLoading: true,
  isAdmin: false,
  reloadAuth: () => {},
  purchasePackageData: undefined,
  withdrawData: { totalWithdraw: 0, percentageLastMonthWithdraw: 0 },
  setPurchasePackageData: () => {},
  setWithdrawData: () => {},
  topData: undefined,
  setTopData: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  // State to store authentication status
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // State to store user data
  const [userData, setUserData] = useState<userTypes | null>(null);
  // State to track loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [reload, setReload] = useState<number>(0);
  const [purchasePackageData, setPurchasePackageData] = useState();
  const [withdrawData, setWithdrawData] = useState({
    totalWithdraw: 0,
    percentageLastMonthWithdraw: 0,
  });
  const [topData, setTopData] = useState();
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const url = `${pathname}${params.toString()}`;
  console.log(url);
  // Function to fetch user data from API
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      //localStorage.setItem("userToken", Cookies.get("token") as string);
      // Make API request to fetch user data
      const response = await fetch("/apis/user/details", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      if (response.ok) {
        const data = (await response.json()) as userTypes;
        setUserData(data);
        setIsLoading(false);
        setIsAuthenticated(true);
        return data;
        // router.replace(url);
      } else {
        setIsAuthenticated(false);
        //router.replace("/auth/signin")
        setIsLoading(false);
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsAuthenticated(false);

      // router.replace("/auth/signin")
      setIsLoading(false);
      return null;
    }
  };
  const reloadAuth = () => {
    setReload(Math.random());
  };

  // useEffect hook to fetch user data when component mounts
  useEffect(() => {
    if (!Cookies.get("token")) {
      //router.replace("/auth/signin")
      setIsLoading(false);
    } else {
      fetchUserData();
    }
  }, [reload]);
 

  // Context value
  const contextValue: AuthContextType = {
    isAuthenticated,
    userData,
    isLoading,
    isAdmin,
    reloadAuth,
    purchasePackageData,
    withdrawData,
    setPurchasePackageData,
    setWithdrawData,
    topData,
    setTopData,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading ? <LoaderScreen /> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
