---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults


---

        
<!--Section: Contact v.2-->
<section class="mb-4">
<div class="row justify-content-center" style="margin-top: 7%;">            
            </div>
<div class="container">
    <!--Section heading-->
    <h2 style="text-align: center;color: #c53025;margin-bottom:5%">Contact</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5"></p>
    <div class="row justify-content-center">
        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
            <form name="contact" method="POST" data-netlify="true">
                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Title</label>
                            <input type="text" id="title" name="title" class="form-control" required>                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Name</label>
                            <input type="text" id="name" name="name" class="form-control" required>                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Category</label>
                              <select class="form-control custom-select" id="category" name="category" required>
                              <option selected>Choose...</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                             </select>     
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Image</label>
                              <input type="file" id="image" name="image" class="form-control"  required />                        
                        </div>
                    </div>
                </div>                
                <!--Grid row-->
                <div class="row">
                    <!--Grid column-->
                    <div class="col-md-12">
                        <div class="md-form">
                        <label for="message">Body</label>
                            <textarea type="text" id="body" name="body" rows="18"
                                class="form-control md-textarea"></textarea>                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <div class="field">
                <div data-netlify-recaptcha="true">
                </div>
            </div>
            </form>
            <div class="text-center text-md-left" style="margin-top:2%">
                <button type="submit">Send</button>
            </div>
        </div>
        <!--Grid column-->
    </div>
    </div>
</section>
<!--Section: Contact v.2-->
