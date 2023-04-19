import usePolicy from 'app/[locale]/client-service/policy/_components/policy.hook'

const Policy = () => {
    const {children} = usePolicy()

    return (
        <div className={'policy'}>
            {children}
        </div>
    )
}

export default Policy