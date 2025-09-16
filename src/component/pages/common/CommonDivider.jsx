'use client'
const CommonDivider = () => {
    return (
        <div className="container w-full my-8">
            <style jsx>{`
                .container {
                    border-bottom: 1px solid grey;
                    max-width: 1200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                }
                @media (max-width: 768px) {
                    .container {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}



export default CommonDivider;