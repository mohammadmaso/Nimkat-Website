import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation Mutation($tokenAuthUsername: String!, $tokenAuthPassword: String!) {
  tokenAuth(username: $tokenAuthUsername, password: $tokenAuthPassword) {
    token
    refreshToken
  }
}
`;


export const SIGN_UP = gql`
  mutation Mutation($registerSmsPassword1: String!, $registerSmsPassword2: String!, $registerSmsUsername: String!) {
  registerSms(password1: $registerSmsPassword1, password2: $registerSmsPassword2, username: $registerSmsUsername) {
    success
    errors
  }
}
`;


export const RESEND_ACTIVATION_SMS = gql`
  mutation Mutation($resendSmsUsername: String!) {
  resendSms(username: $resendSmsUsername) {
    success
    errors
  }
}
`;


export const VERIFY_ACCOUNT_SMS = gql`
  mutation Mutation($verifySmsCode: String!, $verifySmsUsername: String!) {
  verifySms(code: $verifySmsCode, username: $verifySmsUsername) {
    success
    errors
  }
}
`;



export const REFRESH_TOKEN = gql`
  mutation Mutation($refreshTokenRefreshToken: String!) {
  refreshToken(refreshToken: $refreshTokenRefreshToken) {
    token,
    refreshToken
  }
}
`;

export const PASSWORD_RESET_TOKEN = gql`
  mutation RegisterMutation($passwordResetToken: String!, $passwordResetNewPassword1: String!, $passwordResetNewPassword2: String!) {
  passwordReset(token: $passwordResetToken, newPassword1: $passwordResetNewPassword1, newPassword2: $passwordResetNewPassword2) {
    success
    errors
  }
}
`;

export const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation Mutation($sendPasswordResetEmailEmail: String!) {
  sendPasswordResetEmail(email: $sendPasswordResetEmailEmail) {
    success
    errors
  }
}
`;
