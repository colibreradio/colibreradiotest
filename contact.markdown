---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: category
---

        
<!--Section: Contact v.2-->
<section class="mb-4">
<div class="row justify-content-center" style="margin-top: 7%;">            
            </div>
<div class="container">
    <!--Section heading-->
    <h2 style="text-align: center;color: #c53025;margin-bottom:5%">Φόρμα Επικοινωνίας / Αποστολή Άρθρου</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5"></p>
    <div class="row justify-content-center">
        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
            <form name="contact" method="POST" data-netlify="true">
                <!--Grid row-->
                <div class="row" style="margin-top:2%">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Τίτλος</label>
                            <input type="text" id="title" name="title" class="form-control" required>                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row" style="margin-top:2%">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Όνομα/Ψευδώνυμο</label>
                            <input type="text" id="name" name="name" class="form-control" required>                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <div class="row" style="margin-top:2%">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Email (προαιρετκό)</label>
                            <input type="text" id="name" name="name" class="form-control" required>                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <!--Grid row-->
                <div class="row" style="margin-top:2%">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Κατηγορία</label>
                              <select class="form-control custom-select" id="category" name="category" required>
                              <option disabled selected value>Επιλογή...</option>
                              <option value="justcontact">Επικοινωνία</option>
                              {% for category in site.categories %}
                              <option value="{{ category[0] }}">{% include categorycondition.html %}</option>
                              {% endfor %}
                             </select>     
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <div class="row" style="margin-top:2%">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Αρχείο/Εικόνα/Βίντεο</label>
                              <input type="file" id="file" name="file" class="form-control-file" />                        
                        </div>
                    </div>
                </div>                
                <!--Grid row-->
                <div class="row" style="margin-top:2%">
                    <!--Grid column-->
                    <div class="col-md-12">
                        <div class="md-form">
                        <label for="message">Κείμενο</label>
                            <textarea type="text" id="body" name="body" rows="18"
                                class="form-control md-textarea" required></textarea>                            
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <div class="field" style="margin-top:2%">
                <div data-netlify-recaptcha="true">
                </div>
            </div>
            <div class="text-center text-md-left" style="margin-top:2%">
                <button type="submit" class="btn btn-primary">Αποστολή</button>            
            </div>
            </form>
        </div>
        <!--Grid column-->
    </div>
    </div>
</section>
<!--Section: Contact v.2-->
