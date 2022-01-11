import React from 'react'
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
const Backtotop = () => {
    return (
        <div>
            {/* <!-- back to top section start here --> */}
            <footer className="footer mt-auto py-3 bg-secondary">
                <div className="container text-center" onClick={scrollToTop} id="btn-back-to-top">
                    <span className="text-white">Back to top</span>
                </div>
            </footer>
            {/* <!-- back to top section end here --> */}
        </div>
    )
}

export default Backtotop
