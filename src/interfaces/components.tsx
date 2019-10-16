export interface IMenuDetail {
  name: string,
  path: string,
  scope: string,
  icon: string,
  child: IMenuDetail[]
}