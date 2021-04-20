import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://i.pinimg.com/originals/c8/f7/a8/c8f7a86a5a668cac7a2846073ce4baf3.jpg"
        alt="Imagem de perfil"
      />
      <div>
        <strong>Jordana Momberg</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
