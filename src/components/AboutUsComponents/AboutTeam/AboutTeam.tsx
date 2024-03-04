import React from "react";
import styles from "./AboutTeam.module.css";
import Card from "./Card";
import team_member_1 from "../../../assets/team-1-user-1.svg";
import team_member_2 from "../../../assets/team-1-user-2.svg";
import team_member_3 from "../../../assets/team-1-user-3.svg";
const AboutTeam = () => {
  const teamArray = [
    {
      image: team_member_1,
      name: "Username",
      profession: "Profession",
    },
    {
      image: team_member_2,
      name: "Username",
      profession: "Profession",
    },
    {
      image: team_member_3,
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
