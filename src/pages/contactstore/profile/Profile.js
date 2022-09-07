import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import FormData from "form-data"
import { postProfileImage, fetchProfileImage, fetchProfileData } from "../../../features/profileSlice";
import { DataBox } from "../../../components/ui/StyledComponents";
import {
  DataBoxNavProfile,
  ImageDataContainer,
  ImageWrapper,
  InputImage,
  Image,
  TopImageText,
  ErrorImageText,
  ErrorDataText,
  InfoWrapper,
  InfoLabel,
  InfoData,
} from "./ProfileStyle";
import ChangePassword from "./components/ChangePassword";
// import camberbech from "../../../assets/camberbech.jpg";
import { getProfileData, getProfileImage, uploadProfileImage } from "../../../axios/requestConfig";

const Profile = () => {

  const dispatch = useDispatch()

  const { firstName, lastName, emailAddress, joinDate } = useSelector(state => state.profile.profileData)

  const image = useSelector(state => state.profile.profileImage)

  // const changeButton = (e) => {
  //   e.preventDefault()
  //   console.log(token())
  // }

  const uploadImage = async (e) => {
    const formData = new FormData()
    const file = e.target.files[0]
    if (file) {
      formData.append("file", file)
      await dispatch(postProfileImage(function() {return uploadProfileImage(formData)}))
      // await dispatch(postProfileImage({token, user, formData}))
      await dispatch(fetchProfileImage(getProfileImage))
    }
  }

  useEffect(() => {
      dispatch(fetchProfileData(getProfileData))
      // dispatch(fetchProfileData(token))
      dispatch(fetchProfileImage(getProfileImage))
  }, [])

  return (
    <>
      <DataBox>
        <DataBoxNavProfile>PROFILE</DataBoxNavProfile>
        <ImageDataContainer>
          <TopImageText>Click the image to change it:</TopImageText>
          <ImageWrapper>
            <Image src={image} />
            <InputImage
              type="file"
              size="1"
              onChange={uploadImage}
            />
          </ImageWrapper>
          <ErrorImageText>The image was not uploaded</ErrorImageText>
        </ImageDataContainer>


        <InfoWrapper>
          <ErrorDataText>Errror accesing data</ErrorDataText>
          <InfoLabel>First Name:</InfoLabel>
          <InfoData>{firstName}</InfoData>
          <InfoLabel>Last Name:</InfoLabel>
          <InfoData>{lastName}</InfoData>
          <InfoLabel>Email:</InfoLabel>
          <InfoData>{emailAddress}</InfoData>
          <InfoLabel>Join Date:</InfoLabel>
          <InfoData>{joinDate}</InfoData>
        </InfoWrapper>
        <ChangePassword />
      </DataBox>
    </>
  );
};

export default Profile;
