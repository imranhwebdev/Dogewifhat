
export default function CommonTitle({ title, des, className='text-center' }) {
    return (
        <div className={`common-title ${className}`}>
            <h2 className="text-uppercase fw-semibold">{title}</h2>
            {des ? (
                <p>{des}</p>
            ) : ''}
        </div>
    )
}
