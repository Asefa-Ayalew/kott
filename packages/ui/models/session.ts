export type Session = {
  accessToken: string;
  accessTokenExpriresInMinutes: number;
  accessTokenIssueDate: string;
  organizations: any;
  profile: any;
  refreshToken: string;
  refreshTokenExpriresInDays: number;
  refreshTokenIssueDate: string;
  selectedOrganization?: any;
  selectedUnit?: any;
};
