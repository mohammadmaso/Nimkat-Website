import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

export type AchivmentType = Node & {
  __typename?: 'AchivmentType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  image: Scalars['String'];
  profilemodelSet: ProfileTypeConnection;
};


export type AchivmentTypeProfilemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AchivmentTypeConnection = {
  __typename?: 'AchivmentTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AchivmentTypeEdge>>;
};

/** A Relay edge containing a `AchivmentType` and its cursor. */
export type AchivmentTypeEdge = {
  __typename?: 'AchivmentTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AchivmentType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type BoughtCoursesType = Node & {
  __typename?: 'BoughtCoursesType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  course: SecureCourseType;
  paymentStatus: Scalars['Boolean'];
  refId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  completeLessons: CourseLessonTypeConnection;
};


export type BoughtCoursesTypeCompleteLessonsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  modifyAt?: Maybe<Scalars['DateTime']>;
  shortDescription?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type BoughtCoursesTypeConnection = {
  __typename?: 'BoughtCoursesTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BoughtCoursesTypeEdge>>;
};

/** A Relay edge containing a `BoughtCoursesType` and its cursor. */
export type BoughtCoursesTypeEdge = {
  __typename?: 'BoughtCoursesTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<BoughtCoursesType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** check course as completed */
export type CompleteLesson = {
  __typename?: 'CompleteLesson';
  success?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
};

export type CourseCategoryType = Node & {
  __typename?: 'CourseCategoryType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  teacherInCategory: TeacherTypeConnection;
  coursemodelSet: SecureCourseTypeConnection;
};


export type CourseCategoryTypeTeacherInCategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CourseCategoryTypeCoursemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};

export type CourseCategoryTypeConnection = {
  __typename?: 'CourseCategoryTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseCategoryTypeEdge>>;
};

/** A Relay edge containing a `CourseCategoryType` and its cursor. */
export type CourseCategoryTypeEdge = {
  __typename?: 'CourseCategoryTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CourseCategoryType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CourseLessonType = Node & {
  __typename?: 'CourseLessonType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  createdAt: Scalars['DateTime'];
  modifyAt: Scalars['DateTime'];
  shortDescription?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  video: Scalars['String'];
  slug: Scalars['String'];
  usersCompleted: BoughtCoursesTypeConnection;
  sectionOfLesson: CourseSectionTypeConnection;
};


export type CourseLessonTypeUsersCompletedArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
  paymentStatus?: Maybe<Scalars['Boolean']>;
  refId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  completeLessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CourseLessonTypeSectionOfLessonArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  shortDescription?: Maybe<Scalars['String']>;
  lessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type CourseLessonTypeConnection = {
  __typename?: 'CourseLessonTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseLessonTypeEdge>>;
};

/** A Relay edge containing a `CourseLessonType` and its cursor. */
export type CourseLessonTypeEdge = {
  __typename?: 'CourseLessonTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CourseLessonType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CourseLikeType = Node & {
  __typename?: 'CourseLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  course?: Maybe<SecureCourseType>;
  users: UserTypeConnection;
};


export type CourseLikeTypeUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CourseLikeTypeConnection = {
  __typename?: 'CourseLikeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseLikeTypeEdge>>;
};

/** A Relay edge containing a `CourseLikeType` and its cursor. */
export type CourseLikeTypeEdge = {
  __typename?: 'CourseLikeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CourseLikeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export enum CourseModelLanguage {
  /** فارسی */
  FA = 'FA',
  /** English */
  EN = 'EN'
}

/** An enumeration. */
export enum CourseReviewLikeModelValue {
  /** Up */
  A_1 = 'A_1',
  /** Down */
  _1 = '_1'
}

export type CourseReviewLikeType = Node & {
  __typename?: 'CourseReviewLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user?: Maybe<UserType>;
  review?: Maybe<CourseReviewType>;
  value: CourseReviewLikeModelValue;
};

export type CourseReviewLikeTypeConnection = {
  __typename?: 'CourseReviewLikeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseReviewLikeTypeEdge>>;
};

/** A Relay edge containing a `CourseReviewLikeType` and its cursor. */
export type CourseReviewLikeTypeEdge = {
  __typename?: 'CourseReviewLikeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CourseReviewLikeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CourseReviewType = Node & {
  __typename?: 'CourseReviewType';
  /** The ID of the object. */
  id: Scalars['ID'];
  course?: Maybe<SecureCourseType>;
  author?: Maybe<UserType>;
  subject: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  likesCount: Scalars['Int'];
  likes: Scalars['Int'];
  published: Scalars['Boolean'];
  coursereviewlikemodelSet: CourseReviewLikeTypeConnection;
};


export type CourseReviewTypeCoursereviewlikemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type CourseReviewTypeConnection = {
  __typename?: 'CourseReviewTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseReviewTypeEdge>>;
};

/** A Relay edge containing a `CourseReviewType` and its cursor. */
export type CourseReviewTypeEdge = {
  __typename?: 'CourseReviewTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CourseReviewType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CourseSectionType = Node & {
  __typename?: 'CourseSectionType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  createdAt: Scalars['DateTime'];
  shortDescription?: Maybe<Scalars['String']>;
  lessons: CourseLessonTypeConnection;
  published: Scalars['Boolean'];
  video: Scalars['String'];
  slug: Scalars['String'];
  courseOfSection: SecureCourseTypeConnection;
};


export type CourseSectionTypeLessonsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  modifyAt?: Maybe<Scalars['DateTime']>;
  shortDescription?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type CourseSectionTypeCourseOfSectionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};

export type CourseSectionTypeConnection = {
  __typename?: 'CourseSectionTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseSectionTypeEdge>>;
};

/** A Relay edge containing a `CourseSectionType` and its cursor. */
export type CourseSectionTypeEdge = {
  __typename?: 'CourseSectionTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CourseSectionType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Course list */
export type CourseType = Node & {
  __typename?: 'CourseType';
  /** The ID of the object. */
  id: Scalars['ID'];
  teacher?: Maybe<TeacherType>;
  title: Scalars['String'];
  createdAt: Scalars['DateTime'];
  shortDescription?: Maybe<Scalars['String']>;
  category?: Maybe<CourseCategoryType>;
  image?: Maybe<Scalars['String']>;
  language?: Maybe<CourseModelLanguage>;
  price?: Maybe<Scalars['Int']>;
  discountPrice?: Maybe<Scalars['Int']>;
  sections: CourseSectionTypeConnection;
  published: Scalars['Boolean'];
  underConstruction: Scalars['Boolean'];
  slug: Scalars['String'];
  video: Scalars['String'];
  favouritecoursemodelSet: FavouriteCourseTypeConnection;
  boughtcoursesmodelSet: BoughtCoursesTypeConnection;
  coursereviewmodelSet: CourseReviewTypeConnection;
  courseLikes?: Maybe<CourseLikeType>;
};


/** Course list */
export type CourseTypeSectionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  shortDescription?: Maybe<Scalars['String']>;
  lessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** Course list */
export type CourseTypeFavouritecoursemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
};


/** Course list */
export type CourseTypeBoughtcoursesmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
  paymentStatus?: Maybe<Scalars['Boolean']>;
  refId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  completeLessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/** Course list */
export type CourseTypeCoursereviewmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  course?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type CourseTypeConnection = {
  __typename?: 'CourseTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseTypeEdge>>;
};

/** A Relay edge containing a `CourseType` and its cursor. */
export type CourseTypeEdge = {
  __typename?: 'CourseTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CourseType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CreateCourseLike = {
  __typename?: 'CreateCourseLike';
  success?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Scalars['Boolean']>;
};

export type CreateCourseReviewInput = {
  courseId: Scalars['ID'];
  subject?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCourseReviewPayload = {
  __typename?: 'CreateCourseReviewPayload';
  review?: Maybe<CourseReviewType>;
  success?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};


/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** delete course review mutation. */
export type DeleteCourseReview = {
  __typename?: 'DeleteCourseReview';
  deleted?: Maybe<Scalars['Boolean']>;
};


export type FavouriteCourseType = Node & {
  __typename?: 'FavouriteCourseType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  course: SecureCourseType;
};

export type FavouriteCourseTypeConnection = {
  __typename?: 'FavouriteCourseTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FavouriteCourseTypeEdge>>;
};

/** A Relay edge containing a `FavouriteCourseType` and its cursor. */
export type FavouriteCourseTypeEdge = {
  __typename?: 'FavouriteCourseTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<FavouriteCourseType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type Mutation = {
  __typename?: 'Mutation';
  createCourseLike?: Maybe<CreateCourseLike>;
  createCourseReview?: Maybe<CreateCourseReviewPayload>;
  /** update course review mutation. */
  updateCourseReview?: Maybe<UpdateCourseReview>;
  /** delete course review mutation. */
  deleteCourseReview?: Maybe<DeleteCourseReview>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Set user password - for passwordless registration
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, set
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordSet?: Maybe<PasswordSet>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  updateProfile?: Maybe<UpdateProfilePayload>;
  buyCourse?: Maybe<UpdateProfilePayload>;
  /** Register user and send verification code */
  registerSms?: Maybe<RegisterSms>;
  /** Verify user using verification code that send with sms */
  verifySms?: Maybe<VerifySms>;
  /** Resend sms to user */
  resendSms?: Maybe<ResendSms>;
  /** check course as completed */
  completeLesson?: Maybe<CompleteLesson>;
  /** uncheck course complete status */
  undoCompleteLesson?: Maybe<UndoCompleteLesson>;
};


export type MutationCreateCourseLikeArgs = {
  courseId: Scalars['ID'];
};


export type MutationCreateCourseReviewArgs = {
  input: CreateCourseReviewInput;
};


export type MutationUpdateCourseReviewArgs = {
  courseReviewId?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  subject: Scalars['String'];
};


export type MutationDeleteCourseReviewArgs = {
  courseReviewId: Scalars['ID'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  token: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationPasswordSetArgs = {
  token: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationPasswordChangeArgs = {
  oldPassword: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};


export type MutationArchiveAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationBuyCourseArgs = {
  input: UpdateProfileInput;
};


export type MutationRegisterSmsArgs = {
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};


export type MutationVerifySmsArgs = {
  code: Scalars['String'];
  username: Scalars['String'];
};


export type MutationResendSmsArgs = {
  username: Scalars['String'];
};


export type MutationCompleteLessonArgs = {
  boughtCourseId: Scalars['String'];
  lessonId: Scalars['String'];
};


export type MutationUndoCompleteLessonArgs = {
  boughtCourseId: Scalars['String'];
  lessonId: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Set user password - for passwordless registration
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, set
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordSet = {
  __typename?: 'PasswordSet';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileEdge>>;
};

/** A Relay edge containing a `Profile` and its cursor. */
export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProfileType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProfileInputType = {
  about?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['Upload']>;
  tripStatus?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ProfileModelGender {
  /** male */
  M = 'M',
  /** female */
  F = 'F',
  /** non binary */
  O = 'O'
}

export type ProfileType = Node & {
  __typename?: 'ProfileType';
  user: UserType;
  about?: Maybe<Scalars['String']>;
  gender?: Maybe<ProfileModelGender>;
  achievements: AchivmentTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type ProfileTypeAchievementsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ProfileTypeConnection = {
  __typename?: 'ProfileTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileTypeEdge>>;
};

/** A Relay edge containing a `ProfileType` and its cursor. */
export type ProfileTypeEdge = {
  __typename?: 'ProfileTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProfileType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  teacher?: Maybe<TeacherType>;
  allTechears?: Maybe<TeacherTypeConnection>;
  /** The ID of the object */
  course?: Maybe<CourseType>;
  allCourses?: Maybe<CourseTypeConnection>;
  /** The ID of the object */
  courseCategory?: Maybe<CourseCategoryType>;
  allCourseCategories?: Maybe<CourseCategoryTypeConnection>;
  /** The ID of the object */
  courseLikes?: Maybe<CourseLikeType>;
  allCourseLikes?: Maybe<CourseLikeTypeConnection>;
  /** The ID of the object */
  courseReview?: Maybe<CourseReviewType>;
  allCourseReview?: Maybe<CourseReviewTypeConnection>;
  me?: Maybe<UserType>;
  /** The ID of the object */
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
  /** The ID of the object */
  profile?: Maybe<ProfileType>;
  allProfile?: Maybe<ProfileConnection>;
  /** The ID of the object */
  boughtCourse?: Maybe<BoughtCoursesType>;
  allBoughtCourses?: Maybe<BoughtCoursesTypeConnection>;
  secureBougthCourse?: Maybe<BoughtCoursesType>;
  myBoughtCourses?: Maybe<BoughtCoursesTypeConnection>;
};


export type QueryTeacherArgs = {
  id: Scalars['ID'];
};


export type QueryAllTechearsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryCourseArgs = {
  id: Scalars['ID'];
};


export type QueryAllCoursesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};


export type QueryCourseCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllCourseCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type QueryCourseLikesArgs = {
  id: Scalars['ID'];
};


export type QueryAllCourseLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  course?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryCourseReviewArgs = {
  id: Scalars['ID'];
};


export type QueryAllCourseReviewArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  course?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAllProfileArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBoughtCourseArgs = {
  id: Scalars['ID'];
};


export type QueryAllBoughtCoursesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
  paymentStatus?: Maybe<Scalars['Boolean']>;
  refId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  completeLessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QuerySecureBougthCourseArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryMyBoughtCoursesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
  paymentStatus?: Maybe<Scalars['Boolean']>;
  refId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  completeLessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Refresh = {
  __typename?: 'Refresh';
  token?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  refreshToken?: Maybe<Scalars['String']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** Register user and send verification code */
export type RegisterSms = {
  __typename?: 'RegisterSMS';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** Resend sms to user */
export type ResendSms = {
  __typename?: 'ResendSMS';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** Course list */
export type SecureCourseType = Node & {
  __typename?: 'SecureCourseType';
  /** The ID of the object. */
  id: Scalars['ID'];
  teacher?: Maybe<TeacherType>;
  title: Scalars['String'];
  createdAt: Scalars['DateTime'];
  shortDescription?: Maybe<Scalars['String']>;
  category?: Maybe<CourseCategoryType>;
  image?: Maybe<Scalars['String']>;
  language?: Maybe<CourseModelLanguage>;
  price?: Maybe<Scalars['Int']>;
  discountPrice?: Maybe<Scalars['Int']>;
  sections: CourseSectionTypeConnection;
  published: Scalars['Boolean'];
  underConstruction: Scalars['Boolean'];
  slug: Scalars['String'];
  video: Scalars['String'];
  favouritecoursemodelSet: FavouriteCourseTypeConnection;
  boughtcoursesmodelSet: BoughtCoursesTypeConnection;
  coursereviewmodelSet: CourseReviewTypeConnection;
  courseLikes?: Maybe<CourseLikeType>;
};


/** Course list */
export type SecureCourseTypeSectionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  shortDescription?: Maybe<Scalars['String']>;
  lessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** Course list */
export type SecureCourseTypeFavouritecoursemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
};


/** Course list */
export type SecureCourseTypeBoughtcoursesmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
  paymentStatus?: Maybe<Scalars['Boolean']>;
  refId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  completeLessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


/** Course list */
export type SecureCourseTypeCoursereviewmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  course?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type SecureCourseTypeConnection = {
  __typename?: 'SecureCourseTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SecureCourseTypeEdge>>;
};

/** A Relay edge containing a `SecureCourseType` and its cursor. */
export type SecureCourseTypeEdge = {
  __typename?: 'SecureCourseTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<SecureCourseType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type TeacherType = Node & {
  __typename?: 'TeacherType';
  user: UserType;
  name?: Maybe<Scalars['String']>;
  enName?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['JSONString']>;
  videoId: Scalars['String'];
  categories: CourseCategoryTypeConnection;
  coursemodelSet: SecureCourseTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type TeacherTypeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type TeacherTypeCoursemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};

export type TeacherTypeConnection = {
  __typename?: 'TeacherTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TeacherTypeEdge>>;
};

/** A Relay edge containing a `TeacherType` and its cursor. */
export type TeacherTypeEdge = {
  __typename?: 'TeacherTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TeacherType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** uncheck course complete status */
export type UndoCompleteLesson = {
  __typename?: 'UndoCompleteLesson';
  success?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** update course review mutation. */
export type UpdateCourseReview = {
  __typename?: 'UpdateCourseReview';
  review?: Maybe<CourseReviewType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateProfileInput = {
  profile?: Maybe<ProfileInputType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProfilePayload = {
  __typename?: 'UpdateProfilePayload';
  profile?: Maybe<ProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};


export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** الزامی. 150 کاراکتر یا کمتر. فقط شامل حروف، اعداد، و علامات @/./+/-/_ */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** نشان می‌دهد که آیا این کاربر می‌تواند وارد این وبگاه مدیریت شود یا خیر. */
  isStaff: Scalars['Boolean'];
  /** نشان می‌دهد که آیا این کاربر اجازهٔ فعالیت دارد یا خیر. به جای حذف کاربر این تیک را بردارید. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  verified?: Maybe<Scalars['Boolean']>;
  archived?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  profilemodel?: Maybe<ProfileType>;
  favouritecoursemodelSet: FavouriteCourseTypeConnection;
  boughtcoursesmodelSet: BoughtCoursesTypeConnection;
  teachermodel?: Maybe<TeacherType>;
  courseReview: CourseReviewTypeConnection;
  coursereviewlikemodelSet: CourseReviewLikeTypeConnection;
  userCourseLikes: CourseLikeTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeFavouritecoursemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
};


export type UserNodeBoughtcoursesmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
  paymentStatus?: Maybe<Scalars['Boolean']>;
  refId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  completeLessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeCourseReviewArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  course?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type UserNodeCoursereviewlikemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};


export type UserNodeUserCourseLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  course?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UserType = Node & {
  __typename?: 'UserType';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** الزامی. 150 کاراکتر یا کمتر. فقط شامل حروف، اعداد، و علامات @/./+/-/_ */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** نشان می‌دهد که آیا این کاربر می‌تواند وارد این وبگاه مدیریت شود یا خیر. */
  isStaff: Scalars['Boolean'];
  /** نشان می‌دهد که آیا این کاربر اجازهٔ فعالیت دارد یا خیر. به جای حذف کاربر این تیک را بردارید. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  verified: Scalars['Boolean'];
  archived: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  profilemodel?: Maybe<ProfileType>;
  favouritecoursemodelSet: FavouriteCourseTypeConnection;
  boughtcoursesmodelSet: BoughtCoursesTypeConnection;
  teachermodel?: Maybe<TeacherType>;
  courseReview: CourseReviewTypeConnection;
  coursereviewlikemodelSet: CourseReviewLikeTypeConnection;
  userCourseLikes: CourseLikeTypeConnection;
  password: Scalars['String'];
  /** نشان می‌دهد که این کاربر همهٔ اجازه‌ها را دارد بدون آنکه به صراحت به او اختصاص داده شده باشد. */
  isSuperuser: Scalars['Boolean'];
};


export type UserTypeFavouritecoursemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
};


export type UserTypeBoughtcoursesmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  course?: Maybe<Scalars['ID']>;
  paymentStatus?: Maybe<Scalars['Boolean']>;
  refId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  completeLessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeCourseReviewArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  course?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type UserTypeCoursereviewlikemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};


export type UserTypeUserCourseLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  course?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTypeEdge>>;
};

/** A Relay edge containing a `UserType` and its cursor. */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload?: Maybe<Scalars['GenericScalar']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** Verify user using verification code that send with sms */
export type VerifySms = {
  __typename?: 'VerifySMS';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type TokenAuthMutationVariables = Exact<{
  tokenAuthUsername: Scalars['String'];
  tokenAuthPassword: Scalars['String'];
}>;


export type TokenAuthMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'refreshToken'>
  )> }
);

export type RegisterSmsMutationVariables = Exact<{
  registerSmsPassword1: Scalars['String'];
  registerSmsPassword2: Scalars['String'];
  registerSmsUsername: Scalars['String'];
}>;


export type RegisterSmsMutation = (
  { __typename?: 'Mutation' }
  & { registerSms?: Maybe<(
    { __typename?: 'RegisterSMS' }
    & Pick<RegisterSms, 'success' | 'errors'>
  )> }
);

export type ResendSmsMutationVariables = Exact<{
  resendSmsUsername: Scalars['String'];
}>;


export type ResendSmsMutation = (
  { __typename?: 'Mutation' }
  & { resendSms?: Maybe<(
    { __typename?: 'ResendSMS' }
    & Pick<ResendSms, 'success' | 'errors'>
  )> }
);

export type VerifySmsMutationVariables = Exact<{
  verifySmsCode: Scalars['String'];
  verifySmsUsername: Scalars['String'];
}>;


export type VerifySmsMutation = (
  { __typename?: 'Mutation' }
  & { verifySms?: Maybe<(
    { __typename?: 'VerifySMS' }
    & Pick<VerifySms, 'success' | 'errors'>
  )> }
);

export type RefreshTokenMutationVariables = Exact<{
  refreshTokenRefreshToken: Scalars['String'];
}>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken?: Maybe<(
    { __typename?: 'Refresh' }
    & Pick<Refresh, 'token' | 'refreshToken'>
  )> }
);

export type PasswordResetMutationVariables = Exact<{
  passwordResetToken: Scalars['String'];
  passwordResetNewPassword1: Scalars['String'];
  passwordResetNewPassword2: Scalars['String'];
}>;


export type PasswordResetMutation = (
  { __typename?: 'Mutation' }
  & { passwordReset?: Maybe<(
    { __typename?: 'PasswordReset' }
    & Pick<PasswordReset, 'success' | 'errors'>
  )> }
);

export type MutationMutationVariables = Exact<{
  sendPasswordResetEmailEmail: Scalars['String'];
}>;


export type MutationMutation = (
  { __typename?: 'Mutation' }
  & { sendPasswordResetEmail?: Maybe<(
    { __typename?: 'SendPasswordResetEmail' }
    & Pick<SendPasswordResetEmail, 'success' | 'errors'>
  )> }
);

export type CompleteLessonMutationVariables = Exact<{
  completeLessonCourseId: Scalars['String'];
  completeLessonLessonId: Scalars['String'];
}>;


export type CompleteLessonMutation = (
  { __typename?: 'Mutation' }
  & { completeLesson?: Maybe<(
    { __typename?: 'CompleteLesson' }
    & Pick<CompleteLesson, 'success' | 'complete'>
  )> }
);

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = (
  { __typename?: 'Query' }
  & { allCourseCategories?: Maybe<(
    { __typename?: 'CourseCategoryTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CourseCategoryTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CourseCategoryType' }
        & Pick<CourseCategoryType, 'id' | 'title' | 'shortDescription' | 'image'>
      )> }
    )>> }
  )> }
);

export type AllCourseQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCourseQuery = (
  { __typename?: 'Query' }
  & { allCourses?: Maybe<(
    { __typename?: 'CourseTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CourseTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CourseType' }
        & Pick<CourseType, 'id' | 'title' | 'createdAt' | 'shortDescription' | 'underConstruction' | 'image' | 'language' | 'price' | 'discountPrice' | 'slug'>
        & { category?: Maybe<(
          { __typename?: 'CourseCategoryType' }
          & Pick<CourseCategoryType, 'title'>
        )>, teacher?: Maybe<(
          { __typename?: 'TeacherType' }
          & Pick<TeacherType, 'name'>
        )> }
      )> }
    )>> }
  )> }
);

export type SecureBougthCourseQueryVariables = Exact<{
  secureBougthCourseId?: Maybe<Scalars['String']>;
}>;


export type SecureBougthCourseQuery = (
  { __typename?: 'Query' }
  & { secureBougthCourse?: Maybe<(
    { __typename?: 'BoughtCoursesType' }
    & { completeLessons: (
      { __typename?: 'CourseLessonTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'CourseLessonTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'CourseLessonType' }
          & Pick<CourseLessonType, 'id'>
        )> }
      )>> }
    ), course: (
      { __typename?: 'SecureCourseType' }
      & Pick<SecureCourseType, 'title' | 'video'>
      & { teacher?: Maybe<(
        { __typename?: 'TeacherType' }
        & Pick<TeacherType, 'name'>
      )>, category?: Maybe<(
        { __typename?: 'CourseCategoryType' }
        & Pick<CourseCategoryType, 'title'>
      )>, sections: (
        { __typename?: 'CourseSectionTypeConnection' }
        & { edges: Array<Maybe<(
          { __typename?: 'CourseSectionTypeEdge' }
          & { node?: Maybe<(
            { __typename?: 'CourseSectionType' }
            & Pick<CourseSectionType, 'id' | 'title' | 'shortDescription' | 'video' | 'slug'>
            & { lessons: (
              { __typename?: 'CourseLessonTypeConnection' }
              & { edges: Array<Maybe<(
                { __typename?: 'CourseLessonTypeEdge' }
                & { node?: Maybe<(
                  { __typename?: 'CourseLessonType' }
                  & Pick<CourseLessonType, 'title' | 'id' | 'video' | 'shortDescription' | 'content'>
                )> }
              )>> }
            ) }
          )> }
        )>> }
      ) }
    ) }
  )> }
);

export type MyBoughtCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyBoughtCoursesQuery = (
  { __typename?: 'Query' }
  & { myBoughtCourses?: Maybe<(
    { __typename?: 'BoughtCoursesTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'BoughtCoursesTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'BoughtCoursesType' }
        & Pick<BoughtCoursesType, 'id' | 'paymentStatus'>
        & { course: (
          { __typename?: 'SecureCourseType' }
          & Pick<SecureCourseType, 'id' | 'title' | 'image' | 'language'>
          & { teacher?: Maybe<(
            { __typename?: 'TeacherType' }
            & Pick<TeacherType, 'name'>
          )>, category?: Maybe<(
            { __typename?: 'CourseCategoryType' }
            & Pick<CourseCategoryType, 'title'>
          )> }
        ) }
      )> }
    )>> }
  )> }
);

export type AllTeacherQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTeacherQuery = (
  { __typename?: 'Query' }
  & { allTechears?: Maybe<(
    { __typename?: 'TeacherTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TeacherTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TeacherType' }
        & Pick<TeacherType, 'name' | 'enName' | 'shortDescription' | 'title' | 'id'>
        & { user: (
          { __typename?: 'UserType' }
          & Pick<UserType, 'firstName' | 'lastName' | 'avatar'>
        ), categories: (
          { __typename?: 'CourseCategoryTypeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'CourseCategoryTypeEdge' }
            & { node?: Maybe<(
              { __typename?: 'CourseCategoryType' }
              & Pick<CourseCategoryType, 'title' | 'id'>
            )> }
          )>> }
        ) }
      )> }
    )>> }
  )> }
);

export type TeacherDetailQueryVariables = Exact<{
  teacherId: Scalars['ID'];
}>;


export type TeacherDetailQuery = (
  { __typename?: 'Query' }
  & { teacher?: Maybe<(
    { __typename?: 'TeacherType' }
    & Pick<TeacherType, 'shortDescription' | 'title' | 'name' | 'videoId' | 'enName'>
    & { user: (
      { __typename?: 'UserType' }
      & Pick<UserType, 'firstName' | 'lastName' | 'avatar' | 'email'>
    ), coursemodelSet: (
      { __typename?: 'SecureCourseTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'SecureCourseTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'SecureCourseType' }
          & Pick<SecureCourseType, 'id' | 'title' | 'createdAt' | 'shortDescription' | 'underConstruction' | 'image' | 'language' | 'price' | 'discountPrice' | 'slug'>
          & { category?: Maybe<(
            { __typename?: 'CourseCategoryType' }
            & Pick<CourseCategoryType, 'title'>
          )>, teacher?: Maybe<(
            { __typename?: 'TeacherType' }
            & Pick<TeacherType, 'name'>
          )> }
        )> }
      )>> }
    ), categories: (
      { __typename?: 'CourseCategoryTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'CourseCategoryTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'CourseCategoryType' }
          & Pick<CourseCategoryType, 'title' | 'id'>
        )> }
      )>> }
    ) }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'firstName' | 'lastName' | 'username' | 'email' | 'avatar'>
  )> }
);

export type MeDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type MeDetailQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'firstName' | 'lastName' | 'email' | 'avatar' | 'verified' | 'lastLogin' | 'username' | 'dateJoined'>
    & { profilemodel?: Maybe<(
      { __typename?: 'ProfileType' }
      & Pick<ProfileType, 'about'>
    )> }
  )> }
);

export type MeBoughtCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type MeBoughtCoursesQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'verified'>
    & { boughtcoursesmodelSet: (
      { __typename?: 'BoughtCoursesTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'BoughtCoursesTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'BoughtCoursesType' }
          & Pick<BoughtCoursesType, 'refId' | 'paymentStatus' | 'createdAt'>
          & { course: (
            { __typename?: 'SecureCourseType' }
            & Pick<SecureCourseType, 'id' | 'slug' | 'title' | 'shortDescription' | 'image' | 'price' | 'language'>
            & { category?: Maybe<(
              { __typename?: 'CourseCategoryType' }
              & Pick<CourseCategoryType, 'title'>
            )> }
          ) }
        )> }
      )>> }
    ) }
  )> }
);


export const TokenAuthDocument = gql`
    mutation TokenAuth($tokenAuthUsername: String!, $tokenAuthPassword: String!) {
  tokenAuth(username: $tokenAuthUsername, password: $tokenAuthPassword) {
    token
    refreshToken
  }
}
    `;
export type TokenAuthMutationFn = Apollo.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      tokenAuthUsername: // value for 'tokenAuthUsername'
 *      tokenAuthPassword: // value for 'tokenAuthPassword'
 *   },
 * });
 */
export function useTokenAuthMutation(baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, options);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;
export const RegisterSmsDocument = gql`
    mutation RegisterSms($registerSmsPassword1: String!, $registerSmsPassword2: String!, $registerSmsUsername: String!) {
  registerSms(
    password1: $registerSmsPassword1
    password2: $registerSmsPassword2
    username: $registerSmsUsername
  ) {
    success
    errors
  }
}
    `;
export type RegisterSmsMutationFn = Apollo.MutationFunction<RegisterSmsMutation, RegisterSmsMutationVariables>;

/**
 * __useRegisterSmsMutation__
 *
 * To run a mutation, you first call `useRegisterSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerSmsMutation, { data, loading, error }] = useRegisterSmsMutation({
 *   variables: {
 *      registerSmsPassword1: // value for 'registerSmsPassword1'
 *      registerSmsPassword2: // value for 'registerSmsPassword2'
 *      registerSmsUsername: // value for 'registerSmsUsername'
 *   },
 * });
 */
export function useRegisterSmsMutation(baseOptions?: Apollo.MutationHookOptions<RegisterSmsMutation, RegisterSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterSmsMutation, RegisterSmsMutationVariables>(RegisterSmsDocument, options);
      }
export type RegisterSmsMutationHookResult = ReturnType<typeof useRegisterSmsMutation>;
export type RegisterSmsMutationResult = Apollo.MutationResult<RegisterSmsMutation>;
export type RegisterSmsMutationOptions = Apollo.BaseMutationOptions<RegisterSmsMutation, RegisterSmsMutationVariables>;
export const ResendSmsDocument = gql`
    mutation ResendSms($resendSmsUsername: String!) {
  resendSms(username: $resendSmsUsername) {
    success
    errors
  }
}
    `;
export type ResendSmsMutationFn = Apollo.MutationFunction<ResendSmsMutation, ResendSmsMutationVariables>;

/**
 * __useResendSmsMutation__
 *
 * To run a mutation, you first call `useResendSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendSmsMutation, { data, loading, error }] = useResendSmsMutation({
 *   variables: {
 *      resendSmsUsername: // value for 'resendSmsUsername'
 *   },
 * });
 */
export function useResendSmsMutation(baseOptions?: Apollo.MutationHookOptions<ResendSmsMutation, ResendSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendSmsMutation, ResendSmsMutationVariables>(ResendSmsDocument, options);
      }
export type ResendSmsMutationHookResult = ReturnType<typeof useResendSmsMutation>;
export type ResendSmsMutationResult = Apollo.MutationResult<ResendSmsMutation>;
export type ResendSmsMutationOptions = Apollo.BaseMutationOptions<ResendSmsMutation, ResendSmsMutationVariables>;
export const VerifySmsDocument = gql`
    mutation VerifySms($verifySmsCode: String!, $verifySmsUsername: String!) {
  verifySms(code: $verifySmsCode, username: $verifySmsUsername) {
    success
    errors
  }
}
    `;
export type VerifySmsMutationFn = Apollo.MutationFunction<VerifySmsMutation, VerifySmsMutationVariables>;

/**
 * __useVerifySmsMutation__
 *
 * To run a mutation, you first call `useVerifySmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifySmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifySmsMutation, { data, loading, error }] = useVerifySmsMutation({
 *   variables: {
 *      verifySmsCode: // value for 'verifySmsCode'
 *      verifySmsUsername: // value for 'verifySmsUsername'
 *   },
 * });
 */
export function useVerifySmsMutation(baseOptions?: Apollo.MutationHookOptions<VerifySmsMutation, VerifySmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifySmsMutation, VerifySmsMutationVariables>(VerifySmsDocument, options);
      }
export type VerifySmsMutationHookResult = ReturnType<typeof useVerifySmsMutation>;
export type VerifySmsMutationResult = Apollo.MutationResult<VerifySmsMutation>;
export type VerifySmsMutationOptions = Apollo.BaseMutationOptions<VerifySmsMutation, VerifySmsMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation refreshToken($refreshTokenRefreshToken: String!) {
  refreshToken(refreshToken: $refreshTokenRefreshToken) {
    token
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      refreshTokenRefreshToken: // value for 'refreshTokenRefreshToken'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const PasswordResetDocument = gql`
    mutation PasswordReset($passwordResetToken: String!, $passwordResetNewPassword1: String!, $passwordResetNewPassword2: String!) {
  passwordReset(
    token: $passwordResetToken
    newPassword1: $passwordResetNewPassword1
    newPassword2: $passwordResetNewPassword2
  ) {
    success
    errors
  }
}
    `;
export type PasswordResetMutationFn = Apollo.MutationFunction<PasswordResetMutation, PasswordResetMutationVariables>;

/**
 * __usePasswordResetMutation__
 *
 * To run a mutation, you first call `usePasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordResetMutation, { data, loading, error }] = usePasswordResetMutation({
 *   variables: {
 *      passwordResetToken: // value for 'passwordResetToken'
 *      passwordResetNewPassword1: // value for 'passwordResetNewPassword1'
 *      passwordResetNewPassword2: // value for 'passwordResetNewPassword2'
 *   },
 * });
 */
export function usePasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<PasswordResetMutation, PasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PasswordResetMutation, PasswordResetMutationVariables>(PasswordResetDocument, options);
      }
export type PasswordResetMutationHookResult = ReturnType<typeof usePasswordResetMutation>;
export type PasswordResetMutationResult = Apollo.MutationResult<PasswordResetMutation>;
export type PasswordResetMutationOptions = Apollo.BaseMutationOptions<PasswordResetMutation, PasswordResetMutationVariables>;
export const MutationDocument = gql`
    mutation Mutation($sendPasswordResetEmailEmail: String!) {
  sendPasswordResetEmail(email: $sendPasswordResetEmailEmail) {
    success
    errors
  }
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      sendPasswordResetEmailEmail: // value for 'sendPasswordResetEmailEmail'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const CompleteLessonDocument = gql`
    mutation CompleteLesson($completeLessonCourseId: String!, $completeLessonLessonId: String!) {
  completeLesson(
    boughtCourseId: $completeLessonCourseId
    lessonId: $completeLessonLessonId
  ) {
    success
    complete
  }
}
    `;
export type CompleteLessonMutationFn = Apollo.MutationFunction<CompleteLessonMutation, CompleteLessonMutationVariables>;

/**
 * __useCompleteLessonMutation__
 *
 * To run a mutation, you first call `useCompleteLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeLessonMutation, { data, loading, error }] = useCompleteLessonMutation({
 *   variables: {
 *      completeLessonCourseId: // value for 'completeLessonCourseId'
 *      completeLessonLessonId: // value for 'completeLessonLessonId'
 *   },
 * });
 */
export function useCompleteLessonMutation(baseOptions?: Apollo.MutationHookOptions<CompleteLessonMutation, CompleteLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteLessonMutation, CompleteLessonMutationVariables>(CompleteLessonDocument, options);
      }
export type CompleteLessonMutationHookResult = ReturnType<typeof useCompleteLessonMutation>;
export type CompleteLessonMutationResult = Apollo.MutationResult<CompleteLessonMutation>;
export type CompleteLessonMutationOptions = Apollo.BaseMutationOptions<CompleteLessonMutation, CompleteLessonMutationVariables>;
export const AllCategoriesDocument = gql`
    query AllCategories {
  allCourseCategories {
    edges {
      node {
        id
        title
        shortDescription
        image
      }
    }
  }
}
    `;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
      }
export function useAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
        }
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesQueryResult = Apollo.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const AllCourseDocument = gql`
    query AllCourse {
  allCourses {
    edges {
      node {
        id
        title
        createdAt
        shortDescription
        category {
          title
        }
        underConstruction
        image
        language
        price
        discountPrice
        slug
        teacher {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useAllCourseQuery__
 *
 * To run a query within a React component, call `useAllCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCourseQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCourseQuery(baseOptions?: Apollo.QueryHookOptions<AllCourseQuery, AllCourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCourseQuery, AllCourseQueryVariables>(AllCourseDocument, options);
      }
export function useAllCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCourseQuery, AllCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCourseQuery, AllCourseQueryVariables>(AllCourseDocument, options);
        }
export type AllCourseQueryHookResult = ReturnType<typeof useAllCourseQuery>;
export type AllCourseLazyQueryHookResult = ReturnType<typeof useAllCourseLazyQuery>;
export type AllCourseQueryResult = Apollo.QueryResult<AllCourseQuery, AllCourseQueryVariables>;
export const SecureBougthCourseDocument = gql`
    query SecureBougthCourse($secureBougthCourseId: String) {
  secureBougthCourse(id: $secureBougthCourseId) {
    completeLessons {
      edges {
        node {
          id
        }
      }
    }
    course {
      teacher {
        name
      }
      title
      category {
        title
      }
      video
      sections {
        edges {
          node {
            id
            title
            shortDescription
            video
            slug
            lessons {
              edges {
                node {
                  title
                  id
                  video
                  shortDescription
                  content
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useSecureBougthCourseQuery__
 *
 * To run a query within a React component, call `useSecureBougthCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useSecureBougthCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSecureBougthCourseQuery({
 *   variables: {
 *      secureBougthCourseId: // value for 'secureBougthCourseId'
 *   },
 * });
 */
export function useSecureBougthCourseQuery(baseOptions?: Apollo.QueryHookOptions<SecureBougthCourseQuery, SecureBougthCourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SecureBougthCourseQuery, SecureBougthCourseQueryVariables>(SecureBougthCourseDocument, options);
      }
export function useSecureBougthCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SecureBougthCourseQuery, SecureBougthCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SecureBougthCourseQuery, SecureBougthCourseQueryVariables>(SecureBougthCourseDocument, options);
        }
export type SecureBougthCourseQueryHookResult = ReturnType<typeof useSecureBougthCourseQuery>;
export type SecureBougthCourseLazyQueryHookResult = ReturnType<typeof useSecureBougthCourseLazyQuery>;
export type SecureBougthCourseQueryResult = Apollo.QueryResult<SecureBougthCourseQuery, SecureBougthCourseQueryVariables>;
export const MyBoughtCoursesDocument = gql`
    query MyBoughtCourses {
  myBoughtCourses {
    edges {
      node {
        id
        paymentStatus
        course {
          id
          teacher {
            name
          }
          title
          category {
            title
          }
          image
          language
        }
      }
    }
  }
}
    `;

/**
 * __useMyBoughtCoursesQuery__
 *
 * To run a query within a React component, call `useMyBoughtCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyBoughtCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyBoughtCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyBoughtCoursesQuery(baseOptions?: Apollo.QueryHookOptions<MyBoughtCoursesQuery, MyBoughtCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyBoughtCoursesQuery, MyBoughtCoursesQueryVariables>(MyBoughtCoursesDocument, options);
      }
export function useMyBoughtCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyBoughtCoursesQuery, MyBoughtCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyBoughtCoursesQuery, MyBoughtCoursesQueryVariables>(MyBoughtCoursesDocument, options);
        }
export type MyBoughtCoursesQueryHookResult = ReturnType<typeof useMyBoughtCoursesQuery>;
export type MyBoughtCoursesLazyQueryHookResult = ReturnType<typeof useMyBoughtCoursesLazyQuery>;
export type MyBoughtCoursesQueryResult = Apollo.QueryResult<MyBoughtCoursesQuery, MyBoughtCoursesQueryVariables>;
export const AllTeacherDocument = gql`
    query AllTeacher {
  allTechears {
    edges {
      node {
        user {
          firstName
          lastName
          avatar
        }
        name
        enName
        shortDescription
        title
        id
        categories {
          edges {
            node {
              title
              id
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAllTeacherQuery__
 *
 * To run a query within a React component, call `useAllTeacherQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTeacherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTeacherQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTeacherQuery(baseOptions?: Apollo.QueryHookOptions<AllTeacherQuery, AllTeacherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTeacherQuery, AllTeacherQueryVariables>(AllTeacherDocument, options);
      }
export function useAllTeacherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTeacherQuery, AllTeacherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTeacherQuery, AllTeacherQueryVariables>(AllTeacherDocument, options);
        }
export type AllTeacherQueryHookResult = ReturnType<typeof useAllTeacherQuery>;
export type AllTeacherLazyQueryHookResult = ReturnType<typeof useAllTeacherLazyQuery>;
export type AllTeacherQueryResult = Apollo.QueryResult<AllTeacherQuery, AllTeacherQueryVariables>;
export const TeacherDetailDocument = gql`
    query TeacherDetail($teacherId: ID!) {
  teacher(id: $teacherId) {
    user {
      firstName
      lastName
      avatar
      email
    }
    shortDescription
    title
    name
    videoId
    coursemodelSet {
      edges {
        node {
          id
          title
          createdAt
          shortDescription
          underConstruction
          category {
            title
          }
          image
          language
          price
          discountPrice
          slug
          teacher {
            name
          }
        }
      }
    }
    categories {
      edges {
        node {
          title
          id
        }
      }
    }
    enName
  }
}
    `;

/**
 * __useTeacherDetailQuery__
 *
 * To run a query within a React component, call `useTeacherDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherDetailQuery({
 *   variables: {
 *      teacherId: // value for 'teacherId'
 *   },
 * });
 */
export function useTeacherDetailQuery(baseOptions: Apollo.QueryHookOptions<TeacherDetailQuery, TeacherDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeacherDetailQuery, TeacherDetailQueryVariables>(TeacherDetailDocument, options);
      }
export function useTeacherDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeacherDetailQuery, TeacherDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeacherDetailQuery, TeacherDetailQueryVariables>(TeacherDetailDocument, options);
        }
export type TeacherDetailQueryHookResult = ReturnType<typeof useTeacherDetailQuery>;
export type TeacherDetailLazyQueryHookResult = ReturnType<typeof useTeacherDetailLazyQuery>;
export type TeacherDetailQueryResult = Apollo.QueryResult<TeacherDetailQuery, TeacherDetailQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    firstName
    lastName
    username
    email
    avatar
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MeDetailDocument = gql`
    query MeDetail {
  me {
    firstName
    lastName
    email
    avatar
    verified
    lastLogin
    username
    dateJoined
    profilemodel {
      about
    }
  }
}
    `;

/**
 * __useMeDetailQuery__
 *
 * To run a query within a React component, call `useMeDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeDetailQuery(baseOptions?: Apollo.QueryHookOptions<MeDetailQuery, MeDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeDetailQuery, MeDetailQueryVariables>(MeDetailDocument, options);
      }
export function useMeDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeDetailQuery, MeDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeDetailQuery, MeDetailQueryVariables>(MeDetailDocument, options);
        }
export type MeDetailQueryHookResult = ReturnType<typeof useMeDetailQuery>;
export type MeDetailLazyQueryHookResult = ReturnType<typeof useMeDetailLazyQuery>;
export type MeDetailQueryResult = Apollo.QueryResult<MeDetailQuery, MeDetailQueryVariables>;
export const MeBoughtCoursesDocument = gql`
    query MeBoughtCourses {
  me {
    verified
    boughtcoursesmodelSet {
      edges {
        node {
          refId
          paymentStatus
          createdAt
          course {
            id
            slug
            title
            shortDescription
            image
            category {
              title
            }
            price
            language
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMeBoughtCoursesQuery__
 *
 * To run a query within a React component, call `useMeBoughtCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeBoughtCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeBoughtCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeBoughtCoursesQuery(baseOptions?: Apollo.QueryHookOptions<MeBoughtCoursesQuery, MeBoughtCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeBoughtCoursesQuery, MeBoughtCoursesQueryVariables>(MeBoughtCoursesDocument, options);
      }
export function useMeBoughtCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeBoughtCoursesQuery, MeBoughtCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeBoughtCoursesQuery, MeBoughtCoursesQueryVariables>(MeBoughtCoursesDocument, options);
        }
export type MeBoughtCoursesQueryHookResult = ReturnType<typeof useMeBoughtCoursesQuery>;
export type MeBoughtCoursesLazyQueryHookResult = ReturnType<typeof useMeBoughtCoursesLazyQuery>;
export type MeBoughtCoursesQueryResult = Apollo.QueryResult<MeBoughtCoursesQuery, MeBoughtCoursesQueryVariables>;