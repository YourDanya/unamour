export const getClasses = (arr: string[] | undefined) => arr?.join(' ') || ''

export const mapArr = (arr: [], listClass: string, elemClass: string) => {
    return (
        <div className={elemClass}>
            {
                arr.map((elem) => (
                    <div className={elemClass}>
                        {elem}
                    </div>
                ))
            }
        </div>
    )
}