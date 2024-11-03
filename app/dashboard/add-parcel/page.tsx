"use client";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import SelectGroupOne from "../../components/SelectGroup/SelectGroupOne";
import { useState } from "react";

const AddParcel = () => {
  const [type, setType] = useState<string>("");
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Parcel" />

      <div className="">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Information Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="flex gap-4 my-5">
                  <div
                    onClick={() => setType("regular")}
                    className={`${
                      type === "regular" ? "bg-primary" : "bg-[#D9D9D9]"
                    } hover:bg-yellow-100 w-[120px] rounded-md p-3 cursor-pointer`}
                  >
                    <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center mx-auto ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          width="20"
                          height="20"
                          fill="url(#pattern0_4844_229)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_4844_229"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_4844_229"
                              transform="scale(0.0111111)"
                            />
                          </pattern>
                          <image
                            id="image0_4844_229"
                            width="90"
                            height="90"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <p className="text-center text-black-2 font-bold">
                      Regular
                    </p>
                    <p className="text-center">24H</p>
                  </div>
                  <div
                    onClick={() => setType("express")}
                    className={`${
                      type === "express" ? "bg-primary" : "bg-[#D9D9D9]"
                    } hover:bg-yellow-100 w-[120px] rounded-md p-3 cursor-pointer`}
                  >
                    <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center mx-auto ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          width="20"
                          height="20"
                          fill="url(#pattern0_4844_237)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_4844_237"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_4844_237"
                              transform="scale(0.0111111)"
                            />
                          </pattern>
                          <image
                            id="image0_4844_237"
                            width="90"
                            height="90"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAELklEQVR4nO2cS2gVVxjHJ9U2CLHFRbTgpqAiLtqFBiyIrsyi6k7FB4Ig0kUriK5EGlqKi6CShJZS3USpFBUX6kLxAQZcWCS0ZNUuii9UAjHWGg3xQfzJ4c7G653cmTPnzPnOyfktw82c7/vlkpk5j3+SRCKRSCQSiUQyAD4CeoBR4CHQrX6W9fmIJkAf79Ote71IA4BFwKsGoocbfT6iCXCKxvyve81IHUAH8CZD9GD95yOaAFfJ5vckJIBZwFHgOfAIOAi0VjBuJ1PzvaVxW4HDwOO0Z9X7LBtj1Q+sBqrnok3ZQAvwZxPRWyxJVr3Vc9T0WI0afpbRqDXZwGaas7QiyYoxk2NlFTA2RbPGZQMfAv82kaxukG0VSa7mCQfobdK0UdnAtzTnQYWSFT2mxitbiBHZQJt6Eckh+ppvvYkqCOgiH7/60pOtwvpKXL8deJpT9B4D/fwsTnIB2eoJpcXgxFEWa0r28QEwLlJyTtkTqomk+DU/A14UEL3QgOgJsZJzyO7XvN6JApJfAjMN9HBMtOQ62X3pvwv17ejXebYFvgAmC4j+21D9bansibSHXnGSG7w9tpT4/QsU46zp+pPQAVZRnLiyoiH6hoboHVb+6qECrEePFa5r9wZghrqpaYpud12/NwBfa0r+z3Xtvq3Y3NcU/Yfr+r0B2Ic+x13X7wXAnHQtTpf9rnvwAuAQ5djgugfxAPObzJjl4XPXfYiH2lxIGSYrWfb3GWAx8Lqk6Duu+xAPcI7yXHbdh2iA5VPsnyvCT657EQ1wHTmEuYkdWIdMwplqpbYuN4RMwtnEDmxHLiNJCFBbT7yLXOxv8aoCYC9yUQuxcxPfAT5Jj6lJpSsJAeAAchk2ud3XKenxC6l8k4RC+lIgkVtBvaikb14S2ZQEeG67W9g3e3Ba7EiyuIc5L6u1i5gOAFcMSL7kug/xAPdKSn5j+phcqPs/JkuKDusYsw2o7Zsug4qeWOC6D/EAG0uKjisyeQC+KzlxNC/XQNMd4LcSoq0kHwQJcFNT8ggw23X93gA80RS9y3Xt3gDM1ZR8O6iJI9sAKzVFGw9LCRpgp4bkIZ1Tu9MaarlNRel0Xbd3AOcLSh5IQqUuTWvcZJoW8E/BiaOOEuln4+liciXpZ2LStICZ6cH6vJz2Jf1MVJoWtSzSIhNHi3xJPxOVpgWsLSD6F1/Sz8SlaZF/l5NKWfzUl/QziUlhR3KK/tGXnkQWBAzknDj62LfeRKVpkW+bwm5f0s9EpmkBs3Ocd7ltIabTWvqZyDQtYBnN2WZyTJvpZ2LTtICtLieOTKefiU3TAn5oIvorG+PaSD8rU4D1vWvASdvBr1Wln4kG+CtDsrpBfum6vmAgOwT2jOvagoLGz9DqsP4S17UFBY03sfe6ris4eHcT+2iaWBNXtSORSCQSiUSSLN4C1W9iDN7LdIMAAAAASUVORK5CYII="
                          />
                        </defs>
                      </svg>
                    </div>
                    <p className="text-center text-black-2 font-bold">
                      Express
                    </p>
                    <p className="text-center">8H</p>
                  </div>
                  <div
                    onClick={() => setType("pick&drop")}
                    className={`${
                      type === "pick&drop" ? "bg-primary" : "bg-[#D9D9D9]"
                    } hover:bg-yellow-100 w-[120px] rounded-md p-3 cursor-pointer`}
                  >
                    <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center mx-auto ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          width="20"
                          height="20"
                          fill="url(#pattern0_4844_246)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_4844_246"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_4844_246"
                              transform="scale(0.0111111)"
                            />
                          </pattern>
                          <image
                            id="image0_4844_246"
                            width="90"
                            height="90"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiklEQVR4nO2cTaiVRRjHn6wMU1MIsShyk1YuNAiuBmFwSd2VFSi1CtK+RN20CNwEKbrQq9620abM1rUI1xmRUdlaWtRNCFIhUzvq5fxiuCNE3PfrnGfemed95wcHLveeO/+Z58yZ+c8zM69IJpPJZDKZTK8BHgBeBU4Ap4HzwGXgpn9d9r877d/zivuf2PU2AXA/sBf4ntE5C+xxZcVuT3IADwPHgWvocRU4BjwkfQe4G9gH/E043If3PnCP9BHgMeAc7fETsEb6BPBy4F5cxBXgRekDwGvALeIxC7wlXQZ4k3TYIx0eLmZJB1eXbdIlgEeBv0gPN088Ll0AWNiyu2jKj85minWA90ifd8UyblXmV2ip44aQB8UqfllthaNiOEGkmbsIzVWTiSifhbPGbrHGmKnOWHwnlnATCzDEHkNgpVjB73Zo8o+fWCeAxf61we+sDJS1dogVfAC0mAHWlWit9+/R4phYwe/jafXkdTX01iv27K/ECsAvSo0+3kBzWknzvFgBuKTU6IkGmhuVNC+KFYAbSo1e0kBziZLmQKwAXI8Q6PuUNK+JFRRdwESEoWNGrAD8rNToEw00P1TSPCdWAL5UavTAWbcaek8qzgtfiBWA/egxUxZsH+TfFfX2ixWASXQZeJ+80bsL93raDxdaPfk2k2IF4F5/WMUaV1zdxRLAx9jjI7EG8Cz2eEYsAnyLHc4Cd4hFjPXqSbGMSzuSPnZSo0UAqxJ3IO6o2iPSBUjrFOn/2SVdAjhFenwmXQNYBPxAOrjE12LpIsyN15obqaPi6rBKugywGvgjYpD/BNZKH2Bu19rdfI3hMJ6SPsFc9q3NI71ue22T9BFgqz+7ERqnsVWM33w96rboS86y7a4oY4viZu58uLK3VNThnZKzgm5MPxL1+oW/a13FENhZUc7mQMF2ZW6u0H695oHMKYmB396ve9B8WCPYm5Rv07ogP1ehub3BlTxX3nJpG7d0bdjw2aqTmn4Y0ThDN6gxXDQJcrzlOnBmhADcrLqLDbw05hXmWzU0tvm6NOWMeiArKrpmjIPmN4AXakxOo/J2RdnPj7GhO2z1CQnAwYKK/AYsUNKYHiEQ00raC4BfCzQOamjUrYQL6HwcUNS5y90paRBkl7BaqKj/QYGOO0Nyp5ZOlRUr+lqtVtZ6ouaC5rr2nW6fkykaHksto1YFTrY5UQBTNQJ9JJD21wV6n4bQ+6/wspKFRRDrA6yoyIm4v60IpL2zQNPFYFkIzdvCb8Qw88DnJYE+FWlRtiuGdw76VQJ2lAR6e2DtT1r11DEnB2BtSaCDPtjELeNb1S7xzsHtDrC0pLFLA2uXeeoDJr1zGcCF+T5kaYHWPHWb3rkI4PA8+oekBVobNtv2ziXPZjrse/YF/7PaSnAMT33StsVJjApPvdysd06N4B0O+CbKMjRBgnnq6ImVxAjmqWN65xQJ4qlT8M4pou6p/UZpphnNh1M32TUUyTCCQYh0CNE6F2M+RaZPjBRod6Yu04ypUXMLbr8u9+xqLvlYtZZ7yWQymUwmk8lkMhnR4l8Bzwa9oKN+7gAAAABJRU5ErkJggg=="
                          />
                        </defs>
                      </svg>
                    </div>
                    <p className="text-center text-black-2 font-bold">
                      Pick & Drop
                    </p>
                    <p className="text-center">24H</p>
                  </div>
                </div>
                <div className="flex gap-10 mb-4">
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="home"
                    />
                    <label className="ml-2" htmlFor="home">
                      Home Delivery
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="point"
                    />
                    <label className="ml-2" htmlFor="html">
                      Point Delivery
                    </label>
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Phone Number <span className="text-meta-1">*</span>
                    </label>
                    <input
                      maxLength={11}
                      required
                      type="tel"
                      placeholder="Enter customer number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Cash on Delivery Amount{" "}
                      <span className="text-meta-1">*</span>
                    </label>
                    <input
                      required
                      type="number"
                      placeholder="Enter due amount"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      required
                      maxLength={80}
                      type="text"
                      placeholder="Enter customer name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Invoice Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter invoice"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Address <span className="text-meta-1">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter customer address"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Weight (KG) <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter parcel weight"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      District <span className="text-meta-1">*</span>
                    </label>
                    <SelectGroupOne />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Thana <span className="text-meta-1">*</span>
                    </label>
                    <SelectGroupOne />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Note
                  </label>
                  <textarea
                    maxLength={200}
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-black hover:bg-opacity-90">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddParcel;
