import { ReactElement, ReactNode } from 'react'

type IProps = {
    title?: string;
    children?: ReactElement | ReactNode
}

const Actionbar = ({ title, children }: IProps) => {
    return (
        <div>
            <h5 className='p-2'>{title}</h5>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{children}</div>
        </div>
    )
}

export default Actionbar