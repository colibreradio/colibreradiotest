---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

        
<!--Section: Contact v.2-->
<section class="mb-4">
<div class="container">
    <!--Section heading-->
    <h2 class="page-header">Contact us</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5"></p>
    <div class="row justify-content-center">
        <!--Grid column-->
        <div class="col-md-8 mb-md-0 mb-5">
            <form name="contact" method="POST" data-netlify="true">
                <!--Grid row-->
                <!-- <div class="row mt-1">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Title</label>
                            <input type="text" id="title" name="title" class="form-control" required>                            
                        </div>
                    </div>
                </div> -->
                <!--Grid row-->
                <!--Grid row-->
                <div class="row mt-1">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Your Name</label>
                            <input type="text" id="name" name="name" class="form-control" required>                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <div class="row mt-1">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Email (not required)</label>
                            <input type="text" id="name" name="name" class="form-control">                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <!-- <div class="row mt-1">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Category</label>
                              <select class="form-control custom-select" id="category" name="category" required>
                              <option disabled selected value>Choose...</option>
                              <option value="justcontact">Contact</option>
                              {% for category in site.categories %}
                              <option value="{{ category[0] }}">{% include categorycondition.html %}</option>
                              {% endfor %}
                             </select>     
                        </div>
                    </div>
                </div> -->
                <!--Grid row-->
                <div class="row mt-1">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">File/Image/Video</label>
                              <input type="file" id="file" name="file" class="form-control-file" />                        
                        </div>
                    </div>
                </div>                
                <!--Grid row-->
                <div class="row mt-1">
                    <!--Grid column-->
                    <div class="col-md-12">
                        <div class="md-form">
                        <label for="message">Text</label>
                            <textarea type="text" id="body" name="body" rows="18"
                                class="form-control md-textarea" required></textarea>                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <div class="field mt-3">
                <div data-netlify-recaptcha="true">
                </div>
            </div>
            <div class="text-center text-md-left mt-3">
                <button type="submit" class="btn btn-primary">Submit</button>            
            </div>
            </form>
        </div>
        <!--Grid column-->
    </div>
    </div>
</section>
<!--Section: Contact v.2-->
