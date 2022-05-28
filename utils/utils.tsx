export const getClasses = (arr: string[] | undefined) => arr?.join(' ') || ''

export const mapList = (arr: any [], listClass: string, elemClass: string) => {
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