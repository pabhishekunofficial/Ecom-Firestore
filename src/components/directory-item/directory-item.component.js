import { useNavigate } from "react-router-dom";

import { DirectoryBodyContainer, BackgroundImage, Body } from "./directory-item.styles";

const DirectoryItem =({category})=>{
   const {imageUrl, title, route} = category;
   const navigate = useNavigate();

   const onNavigateHandler = () => navigate(route);;
   return(
      <DirectoryBodyContainer onClick={onNavigateHandler}>
            <BackgroundImage 
            imageUrl= {imageUrl} />
            <Body>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </Body>
      </DirectoryBodyContainer>
    );
}

export default DirectoryItem;