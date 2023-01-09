import { Aliases } from "../util/Client"

export type NavigationLi = Aliases.Text & {
    to: string
}

export type Wrap = Aliases.Text<JSX.Element> & {
    cname?: string
}