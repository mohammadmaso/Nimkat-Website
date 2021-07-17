import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  course: CourseType;
  paymentStatus: Scalars['Boolean'];
  refId: Scalars['String'];
  createdAt: Scalars['DateTime'];
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

export type CourseCategoryType = Node & {
  __typename?: 'CourseCategoryType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  teacherInCategory: TeacherTypeConnection;
  coursemodelSet: CourseTypeConnection;
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
  published: Scalars['Boolean'];
  video: Scalars['String'];
  slug: Scalars['String'];
  sectionOfLesson: CourseSectionTypeConnection;
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
  course: CourseType;
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
  Fa = 'FA',
  /** English */
  En = 'EN'
}

/** An enumeration. */
export enum CourseReviewLikeModelValue {
  /** Up */
  A_1 = 'A_1',
  /** Down */
  '1' = '_1'
}

export type CourseReviewLikeType = Node & {
  __typename?: 'CourseReviewLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  review: CourseReviewType;
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
  course: CourseType;
  author: UserType;
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
  courseOfSection: CourseTypeConnection;
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
  slug: Scalars['String'];
  video: Scalars['String'];
  favouritecoursemodelSet: FavouriteCourseTypeConnection;
  boughtcoursesmodelSet: BoughtCoursesTypeConnection;
  coursereviewmodelSet: CourseReviewTypeConnection;
  courseLikes?: Maybe<CourseLikeType>;
  costs?: Maybe<Scalars['GenericScalar']>;
  checkList?: Maybe<Scalars['GenericScalar']>;
  todoList?: Maybe<Scalars['GenericScalar']>;
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
  course: CourseType;
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
  mobileNumber: Scalars['String'];
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
  myCourses?: Maybe<CourseType>;
  allMyCourses?: Maybe<CourseTypeConnection>;
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


export type QueryMyCoursesArgs = {
  id: Scalars['ID'];
};


export type QueryAllMyCoursesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
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

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
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
  coursemodelSet: CourseTypeConnection;
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
  email?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  mobileNumber?: Maybe<Scalars['String']>;
  profilemodel?: Maybe<ProfileType>;
  favouritecoursemodelSet: FavouriteCourseTypeConnection;
  boughtcoursesmodelSet: BoughtCoursesTypeConnection;
  teachermodel?: Maybe<TeacherType>;
  courseReview: CourseReviewTypeConnection;
  coursereviewlikemodelSet: CourseReviewLikeTypeConnection;
  userCourseLikes: CourseLikeTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
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
  email?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  mobileNumber?: Maybe<Scalars['String']>;
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
