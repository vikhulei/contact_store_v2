import { useSelector, useDispatch } from "react-redux"
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
  const profile = useSelector(state => state.profileData.profileData)

  const changeButton = (e) => {
    e.preventDefault()
    console.log(profile)
  }


  return (
    <>
      <DataBox>
        <DataBoxNavProfile>PROFILE</DataBoxNavProfile>
        <ImageDataContainer>
        <TopImageText>Click the image to change it:</TopImageText>
        <ImageWrapper>
          <Image src={camberbech} />
          <InputImage type="file" size="1" />
        </ImageWrapper>
        <ErrorImageText>The image was not uploaded</ErrorImageText>
        </ImageDataContainer>

        
        <InfoWrapper>
        <ErrorDataText>Errror accesing data</ErrorDataText>
          <InfoLabel>First Name:</InfoLabel>
          <InfoData>{profile.firstName}</InfoData>
          <InfoLabel>Last Name:</InfoLabel>
          <InfoData>{profile.lastName}</InfoData>
          <InfoLabel>Email:</InfoLabel>
          <InfoData>{profile.emailAddress}</InfoData>
          <InfoLabel>Join Date:</InfoLabel>
          <InfoData>{profile.joinDate}</InfoData>
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
