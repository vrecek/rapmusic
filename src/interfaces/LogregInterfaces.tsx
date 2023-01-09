import { Aliases } from "../util/Client";

export type LogregWrapper = Aliases.Text<JSX.Element[]> & {
    cname: string
    text: string
}

export type InputOptions = {
    text: string
    type: 'password' | 'text'
    additional?: JSX.Element
}