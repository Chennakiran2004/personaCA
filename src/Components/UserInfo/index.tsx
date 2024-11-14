import {
  FormContainer,
  HorizontalLine1,
  InputElement,
  InputLabel,
  SignAndLoginHeading,
  SignAndLoginInHeadingContainer,
  ProfileInfoMainContainer,
  BackImage,
  Button,
  InputContainer,
  EditProfileMainContianer,
  ProfileError,
  UpdateProfileButton,
} from "./styledComponents";
import { useEffect, useState } from "react";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import axios from "axios";
import { handleAxiosError } from "../../Constants/errorHandler";
import NotFound from "../NotFound";

interface ProfileInterface {
  email: string;
  full_name: string;
  gender: string;
  role: string;
  salary: string;
  username: string;
}

const UserInfo = () => {
  const { handleBack } = NavigationEvents();

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [profileError, setProfileError] = useState("");

  const { accessToken, refreshToken, deleteAccessToken, deleteRefereshToken } =
    ChangingTokens();
  const [userData, setUserData] = useState<ProfileInterface | null>();

  const [username, setUsername] = useState("");
  const [notFound, setNotFound] = useState(false);

  const onChangeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeUserName = (e: any) => {
    setUsername(e.target.value);
  };

  const updateProfile = () => {
    try {
      const fetching = async () => {
        const data = {
          email: email,
          full_name: fullname,
          username: username,
        };

        const response = await axios.post(
          `${url}/update/user_profile/v1`,
          data,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setProfileError("Profile Edited Successful");
        setTimeout(()=>{
          handleBack();
        }, 2000)
      };

      fetching();
    } catch (err: any) {
      handleAxiosError(err);
      if (err.response && err.response.status === 404) {
        setNotFound(true);
      }
    }
  };

  useEffect(() => {
    try {
      const fetching = async () => {
        const response = await axios.get(`${url}/get/user_profile/v1`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUserData(response.data);
        setFullName(response.data.full_name ?? "");
        setEmail(response.data.email ?? "");
        setUsername(response.data.username ?? "");
      };

      fetching();
    } catch (err: any) {
      handleAxiosError(err);
      if (err.response && err.response.status === 404) {
        setNotFound(true);
      }
    }
  }, []);

  if (notFound) {
    return <NotFound />;
  }

  return (
    <EditProfileMainContianer>
      <SignAndLoginInHeadingContainer>
        <BackImage onClick={handleBack} size={40} />
        <SignAndLoginHeading>Edit Profile</SignAndLoginHeading>
      </SignAndLoginInHeadingContainer>
      <HorizontalLine1 />
      <FormContainer onSubmit={onSubmit}>
        <InputContainer>
          <InputLabel>Full Name</InputLabel>
          <InputElement value={fullname} onChange={onChangeFullName} />
        </InputContainer>
        <InputContainer>
          <InputLabel>Username</InputLabel>
          <InputElement value={username} onChange={onChangeUserName} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Email</InputLabel>
          <InputElement
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>

        {profileError.length > 0 && <ProfileError>{profileError}</ProfileError>}
        <InputContainer>
          <UpdateProfileButton onClick={updateProfile}>
            Submit
          </UpdateProfileButton>
        </InputContainer>
      </FormContainer>
    </EditProfileMainContianer>
  );
};

export default UserInfo;
