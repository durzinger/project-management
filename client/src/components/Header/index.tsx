import React from 'react'

type Props = {
    name: string;
    buttonComponent?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    isSMallText?: boolean;
}

const Header = ({ name, buttonComponent, isSMallText = false }: Props) => {
  return (
    <div className='mb-5 flex w-full items-center justify-between'>
        <h1 className={`${isSMallText ? 'text-bg' : 'text-2xl'} font-semibold dark:text-white`}>
            {name}
        </h1>
        {buttonComponent}
    </div>
  )
}

export default Header