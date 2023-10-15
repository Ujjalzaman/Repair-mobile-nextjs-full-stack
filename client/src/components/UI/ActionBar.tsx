import { ReactElement, ReactNode } from 'react'

type IProps = {
    title?: string;
    children?: ReactElement | ReactNode
}

const Actionbar = ({ title, children }: IProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{children}</div>
        </div>
    )
}

export default Actionbar