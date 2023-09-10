import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((clients) => (
          <div
            key={clients.id}
            className={`flex-1 ${styles.flexCenter} min-w-[190px] min-w-[120px]`}
          >
            <img
              src={clients.logo}
              alt=""
              className="sm:w-[192px] w-[100px] object-contain"
            />{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
