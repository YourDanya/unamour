import useReview from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.hook'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import useImageModal from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/image-modal/image-modal.hook'

const ImageModal = (props: ReturnType<typeof useReview>) => {
    const {main: {activeUrl, onActiveUrl, onHideModal}} = props
    const {style} = useImageModal(props)

    return (
        <ModalContent
            active={!!activeUrl}
            className={`review-img-modal modal`}
            style={style}
            hideModal={onHideModal}
        >
            {activeUrl && (
                <img
                    className={'modal__img'}
                    src={activeUrl}
                    alt={'review img'}
                />
            )}
        </ModalContent>
    )
}

export default ImageModal