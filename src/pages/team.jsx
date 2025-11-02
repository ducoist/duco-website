import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const TeamData = [
    {
        "image": "/images/Team/Salim Toprak.webp",
        "name": "Salim Toprak",
        "role": "Agency Head",
        "social": []
    },
    {
        "image": "/images/Team/Gül Şengül.webp",
        "name": "Gül Şengül",
        "role": "Social Media Group Head",
        "social": []
    },
    {
        "image": "/images/Team/Yeşim Şengül.webp",
        "name": "Yeşim Şengül",
        "role": "Content Specialist",
        "social": []
    },
    {
        "image": "/images/Team/Tunca Erkal.webp",
        "name": "Tunca Erkal",
        "role": "Creative Director",
        "social": []
    },
    {
        "image": "/images/Team/Furkan Doğan Eyeşmek.webp",
        "name": "Furkan Doğan Eyeşmek",
        "role": "Art Director",
        "social": []
    },
    {
        "image": "/images/Team/Sezgin Sağ.webp",
        "name": "Sezgin Bilal Sağ",
        "role": "Accounts Director",
        "social": []
    },
    {
        "image": "/images/Team/Büke Sepet.webp",
        "name": "Büke Sepet",
        "role": "Influencer Manager",
        "social": []
    },
    {
        "image": "/images/Team/Berrak Çakır.webp",
        "name": "Berrak Çakır",
        "role": "Influencer Marketing",
        "social": []
    },
    {
        "image": "/images/Team/Pınar İstemi.webp",
        "name": "Pınar İstemi",
        "role": "Sound & Music Producer",
        "social": []
    },
    {
        "image": "/images/Team/Esra Aşık.webp",
        "name": "Esra Aşık",
        "role": "Digital Marketing Specialist",
        "social": []
    },
    {
        "image": "/images/Team/Oğuz Maya.webp",
        "name": "Oğuz Maya",
        "role": "Sales & Marketing Lead",
        "social": []
    },
    {
        "image": "/images/Team/Yeliz Eren.webp",
        "name": "Yeliz Eren",
        "role": "Lead Analyst",
        "social": []
    }
]

const Team = () => {
  return (
    <Layouts>
        <PageBanner pageTitle={"Meet <span className=\"mil-thin\">Our</span><br> Creative <span className=\"mil-thin\">Team</span>"} breadTitle={"Team"} anchorLabel={"Our team"} anchorLink={"#team"} />
      
        {/* team */}
        <section id="team">
            <div className="container mil-p-120-90">
                <div className="row">
                    {TeamData.map((item, key) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={`team-item-${key}`}>

                        <div className="mil-team-card mil-up mil-mb-30">
                            <img src={item.image} alt={item.name} />
                            <div className="mil-description">
                                <div className="mil-secrc-text">
                                    <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                    <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                    <ul className="mil-social-icons mil-center">
                                        {item.social.map((social_item, social_key) => (
                                        <li key={`team-item-${key}-${social_key}`}><a href={social_item.link} target="_blank" className="social-icon"><i className={social_item.icon}></i></a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;