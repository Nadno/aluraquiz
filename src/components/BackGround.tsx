import styled from "styled-components";
import db from "../../db.json";

const BackgroundImage = styled.div`
  background-image: url('${db.bg}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export default BackgroundImage;