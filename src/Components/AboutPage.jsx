import { Modal,ModalHeader,ModalBody,ModalFooter,Button } from "reactstrap"
export default function AboutPage({aboutModal,toggleAbout}) {
    return (
        <div>
    
      <Modal isOpen={aboutModal} toggle={toggleAbout}>
        <ModalHeader className="text-warning d-flex justify-content-center">
            <span className="fs-4 fw-bolder">Welcome to My Store!</span>
        </ModalHeader>
        <ModalBody>
            <div className="text-center lh-lg">
            At <span className="text-warning fw-bolder">My Store</span> , we are passionate about providing our customers with the highest quality products and an exceptional shopping experience. Since our establishment in 2023, we have been dedicated to offering a wide range of innovative and unique items that cater to the diverse needs and interests of our valued customers.
            </div>
        </ModalBody>
        <div className="text-warning d-flex justify-content-between mt-3">
            <span><img src="https://tinyurl.com/2ojk7qxa" alt="curly ribbon" style={{width: "200px",height: "50px"}}/></span>
            <span className="fs-4 fw-bolder">Join Us</span>
            <span><img src="https://tinyurl.com/2ojk7qxa" alt="curly ribbon" style={{width: "200px",height: "50px"}}/></span>
        </div>
        <div>
            <p className="text-center lh-lg ms-2 me-2">
                We invite you to explore our online store and discover the wonders that await you. Whether you're searching for the perfect gift, treating yourself to something special, or simply browsing for inspiration, <span className="text-warning fw-bolder">My Store</span> is here to ignite your imagination and fulfill your shopping desires.
                <p className="mt-3">
                Thank you for choosing <span className="text-warning fw-bolder">My Store</span> . We look forward to serving you and becoming your go-to destination for all things extraordinary.
                </p>
            </p>
            </div>
      </Modal>
    
        </div>
    )
}