import React from "react";
import styles from "./AboutTeam.module.css";
import Card from "./Card";
import { team_member_1_img, team_member_2_img, team_member_3_img } from "../../../assets/images";
const AboutTeam = () => {
  const teamArray = [
    {
      image: team_member_1_img,
      name: "Username",
      profession: "Profession",
    },
    {
      image: team_member_2_img,
      name: "Username",
      profession: "Profession",
    },
    {
      image: team_member_3_img,
      name: "Username",
      profession: "Profession",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles["about-team"]}>
        <div className={styles["container"]}>
          <div className={styles["text-container"]}>
            <p className={styles['meet-our-team']}>Meet Our Team</p>
            <p className={styles['text-desc']}>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className={styles["card-container"]}>
            {teamArray.map((member) => (
              <Card
                image={member.image}
                name={member.name}
                profession={member.profession}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutTeam;
