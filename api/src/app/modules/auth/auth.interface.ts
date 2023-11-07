export type IProps = {
    email: string;
    password: string;
}
export type ILoginResponse = {
    accessToken?: string;
    user: {}
}