import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setFoodType } from "../Redux/foodType";
import { getRecipeInfo } from "@/Redux/recipeInfo";
import { TabData } from "@/datas/TabData";

const Tabs = () => {
  const dispatch = useDispatch();
  const [openTab, setOpenTab] = useState(1);
  const menuItems = useSelector((state) => state.foodMenu.menuItems);
  const foodData = menuItems.results;

  console.log("tabdata", TabData);
  console.log("foodata", foodData);

  const handleFoodTypeChange = (type) => {
    console.log("o77o", type);
    dispatch(setFoodType(type));
  };

  console.log("oo", setFoodType);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="container">
          <div className="w-full shadow-lg py-16">
            <ul
              className="flex justify-evenly mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              {TabData.map((data) => (
                <li
                  className="-mb-px mr-2 last:mr-0  text-center"
                  key={data.id}
                >
                  <Link
                    className={
                      "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                      (openTab === data.tabNumber
                        ? "text-white bg-orange-400"
                        : "text-blueGray-600 bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(data.tabNumber);
                      handleFoodTypeChange(data.type);
                    }}
                    data-toggle="tab"
                    href={data.link}
                    role="tablist"
                  >
                    <Image
                      src={data.image}
                      alt={`${data.name} Image`}
                      width={150}
                      className="image-title m-auto"
                    />
                    <p>{data.name}</p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative min-w-0 break-words mb-6 shadow-lg rounded">
              <div className="px-4 py-5 grid gap-4 md:grid-cols-4 base:grid-cols-2">
                {Array.isArray(foodData)
                  ? foodData.map((f) => {
                      return (
                        <div
                          className="tab tab-content tab-space flex justify-center text-center bg-white py-5 rounded-md"
                          key={f.id}
                        >
                          <div
                            className={openTab === 1 ? "block " : "hidden"}
                            id="link1"
                          >
                            <ul>
                              <li>
                                <Link href={`/recipe/${f.id}`}>
                                  <Image
                                    src={f.image}
                                    width={250}
                                    height={250}
                                    alt="Food Image"
                                    className="cursor-pointer"
                                  />
                                  <p className="title">{f.title}</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className={openTab === 2 ? "block" : "hidden"}
                            id="link2"
                          >
                            <ul>
                              <li>
                                <Link href={`/recipe/${f.id}`}>
                                  <Image
                                    src={f.image}
                                    width={250}
                                    height={250}
                                    alt="Food Image"
                                    className="cursor-pointer"
                                  />
                                  <p className="title">{f.title}</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className={openTab === 3 ? "block" : "hidden"}
                            id="link3"
                          >
                            <ul>
                              <li>
                                <Link href={`/recipe/${f.id}`}>
                                  <Image
                                    src={f.image}
                                    width={250}
                                    height={250}
                                    alt="Food Image"
                                    className="cursor-pointer"
                                  />
                                  <p className="title">{f.title}</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className={openTab === 4 ? "block" : "hidden"}
                            id="link4"
                          >
                            <ul>
                              <li>
                                <Link href={`/recipe/${f.id}`}>
                                  <Image
                                    src={f.image}
                                    width={250}
                                    height={250}
                                    alt="Food Image"
                                    className="cursor-pointer"
                                  />
                                  <p className="title">{f.title}</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className={openTab === 5 ? "block" : "hidden"}
                            id="link5"
                          >
                            <ul>
                              <li>
                                <Link href={`/recipe/${f.id}`}>
                                  <Image
                                    src={f.image}
                                    width={250}
                                    height={250}
                                    alt="Food Image"
                                    className="cursor-pointer"
                                  />
                                  <p className="title">{f.title}</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className={openTab === 6 ? "block" : "hidden"}
                            id="link6"
                          >
                            <ul>
                              <li>
                                <Link href={`/recipe/${f.id}`}>
                                  <Image
                                    src={f.image}
                                    width={250}
                                    height={250}
                                    alt="Food Image"
                                    className="cursor-pointer"
                                  />
                                  <p>{f.title}</p>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
