import React from 'react'


const Footer = () => {
  return (
    
  <footer className="text-center text-lg-start bg-light text-dark">

  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    
    {/* <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div> */}
    

    
    <div className='float-center'>
      <a href="" class="me-4 text-info">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-info">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-success">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-danger">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-warning">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-dark">
        <i class="fab fa-github"></i>
      </a>
    </div>
    
  </section>
  

  
  <section class="">
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4 text-info">
            {/* <i class="fas fa-gem me-3"></i> */}
            <i class="fas fa-shopping-bag me-1"></i>
            Kline Shop
          </h6>
          <p className="text-danger">
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        

        
        {/* <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
          <i class="fab fa-product-hunt me-1"></i>
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div> */}
        

        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4 text-danger">
          <i class="fas fa-link me-1"></i>
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-info">Terms of Service</a>
          </p>
          <p>
            <a href="#!" class="text-success">FAQs</a>
          </p>
          <p>
            <a href="#!" class="text-danger">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-warning">Help</a>
          </p>
        </div>
        

        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4 text-success">
          <i class="fas fa-id-card me-1"></i>
            Contact
          </h6>
          <p><i class="fas fa-home me-3 text-success"></i> 
            Wyalusing, PA 10012, US
          </p>
          <p>
            <i className="fas fa-envelope me-3 text-danger"></i>
            <a href="mailto:info@example.com">
              info@example.com
            </a>
          </p>
          <p><i class="fas fa-phone me-3 text-warning"></i>  1.570.637.0000</p>
          <p><i class="fas fa-print me-3 text-info"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>
  

  
  <div class="text-center p-4 text-danger" 
       style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
       >
    © 2021 Copyright: Kline Shop
  </div>
  
</footer>

  )
}

export default Footer