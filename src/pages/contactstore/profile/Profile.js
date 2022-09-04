import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import FormData from "form-data"
import { postProfileImage, fetchProfileImage, fetchProfileData } from "../../../features/profileSlice";
import { DataBox, Label, Input, SmallButton, ErrorText, Visibility } from "../../../components/ui/StyledComponents";
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
  PasswordForm,
  Fieldset,
  Legend,
  InputsGroup
} from "./ProfileStyle";
import camberbech from "../../../assets/camberbech.jpg";

const Profile = () => {

  const dispatch = useDispatch()
  
  const {firstName, lastName, emailAddress, joinDate} = useSelector(state => state.profile.profileData)

  const image = useSelector(state => state.profile.profileImage)
  
  const changeButton = (e) => {
    e.preventDefault()
    // console.log(firstName)
  }

  const uploadImage = async(e) => {
    const formData = new FormData()
    const file = e.target.files[0]
    if (file) {
    formData.append("file", file)
    await dispatch(postProfileImage(formData))
    await dispatch(fetchProfileImage())
  }
}

useEffect(() => {
  const renderData = async() => {
    await dispatch(fetchProfileData())
    await dispatch(fetchProfileImage())
  }
  renderData()
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
        <PasswordForm>
          <Fieldset>
            <Legend>Change Password</Legend>
            <InputsGroup>
            <Label> Current password:
                <Input type="password"/>
                <Visibility/>
            </Label>
            <Label> New password:
                <Input type="password"/>
                <Visibility/>
            </Label>
            <Label> Retype new password:
                <Input type="password"/>
                <Visibility/>
            </Label>
            </InputsGroup>
            <ErrorText style={{"textAlign": "center"}}>New password does not meet the requirements</ErrorText>
            <SmallButton onClick={changeButton} >Change</SmallButton>
          </Fieldset>
        </PasswordForm>
      </DataBox>
    </>
  );
};

export default Profile;
