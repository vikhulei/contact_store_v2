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
          <InfoData>Doctor</InfoData>
          <InfoLabel>Last Name:</InfoLabel>
          <InfoData>Who</InfoData>
          <InfoLabel>Email:</InfoLabel>
          <InfoData>user3@intrinsicgrouplimited.com</InfoData>
          <InfoLabel>Join Date:</InfoLabel>
          <InfoData>2022-07-25T13:35:33.066+00:00</InfoData>
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
            <SmallButton>Change</SmallButton>
          </Fieldset>
        </PasswordForm>
      </DataBox>
    </>
  );
};

export default Profile;
