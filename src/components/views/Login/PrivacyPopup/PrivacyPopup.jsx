import React from "react";
import Privacy from "../../../../../public/images/privacy.svg";
import "./privacyPopup.scss";
import Image from "next/image";
export default function PrivacyPopup({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="privacy_overlay">
      <div className="privacy_container">
        <div className="privacy_content">
          <div className="privacy_header">
            <div className="privacy_titleWrapper">
              <Image
                src={Privacy}
                width={20}
                height={50}
                alt="privacy"
                className="privacy_icon"
              />

              <h1 className="privacy_title">Privacy Policy</h1>
            </div>
            <button className="privacy_closeButton" onClick={onClose}>
              <span>✖</span>
            </button>
          </div>

          <p className="privacy_subtitle">According to 2024 rights</p>
          <hr className="privacy_divider" />

          <div className="privacy_body">
            <p>
              1. INTRODUCTION <br />
              <br />
              Royal Enfield, a unit of Eicher Motors Limited (hereafter referred
              to as Royal Enfield) is committed to protecting your and your
              family&rsquo;s personal information when you are using “
              www.royalenfield.com”. We want our services to be safe and secure
              for our users. Uniform practices for collecting, using,
              disclosing, storing, retaining, disposing, accessing, transferring
              or otherwise = processing such information assists Royal Enfield
              to process Personal Information fairly and appropriately,
              disclosing it and/or transferring it only under appropriate
              circumstances. This privacy policy relates to our use of any
              personal information we collect from you on
              “www.royalenfield.com”. This privacy policy tells you how we use
              your personal information collected through the
              “www.royalenfield.com”. Please read this privacy policy before
              using the “ www.royalenfield.com “or submitting any personal
              information. This policy will be updated subject to any changes in
              information collection, activities performed or any applicable
              regulations. You are encouraged to review the privacy policy
              whenever you visit the “ www.royalenfield.com” to make sure that
              you understand how any personal information you provide will be
              used.
              <br />
              <br />
              PLEASE NOTE:
              <br />
              &nbsp;&nbsp;&nbsp;The privacy practices set forth in this privacy
              policy are for “ www.royalenfield.com” only. If you link to other
              web sites, please review those privacy policies, which may be very
              different.
              <br />
              <br />
              2. COLLECTION AND USE OF INFORMATION
              <br />
              2.1 COLLECTION OF YOUR INFORMATION <br />
              &nbsp;&nbsp;&nbsp;Royal Enfield collects, processes, and retains
              information about you when you visit our “www.royalenfield.com”.
              You may choose to provide us with information, such as your name,
              email address, company information, street address, telephone
              number, or other information, to access protected information on “
              www.royalenfield.com” or so we can follow up with you after your
              visit. Personal Information may include, but is not limited to:
              <br />
              &nbsp;&nbsp;i. Your name,
              <br />
              &nbsp;&nbsp;ii. Email addresses,
              <br />
              &nbsp;&nbsp;iii.Telephone numbers
              <br />
              &nbsp;&nbsp;iv. Country, City and State
              <br />
              <br />
              2.2 HOW WE USE YOUR INFORMATION
              <br />
              Any of the information we collect from you may be used in one of
              the following ways:
              <br />
              <br />
              (i) TO GATHER DETAILS ABOUT PROSPECT CUSTOMERS:
              <br />
              &nbsp;&nbsp;&nbsp;Your information helps us to more effectively
              respond to your requests and queriesto make the application
              interface user friendly.
              <br />
              (ii) TO SEND PERIODIC EMAILS:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We may use the information you
              share with us, to communicate with you through e-mails, text
              messages and calls, in order to provide our product or service
              related information and/or for promotional and marketing purposes
              for a period of five (5) Year.
              <br />
              (iii) SELECT CONTENT, IMPROVE QUALITY AND FACILITATE USE OF THE
              OTHER INTERFACE CHANNELS:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Royal Enfield may use your
              Personal Information to help create and personalize content on our
              Channels, facilitate your use of the Channels for example, to
              facilitate navigation and the login process, avoid duplicate data
              entry, enhance security, improve quality, track campaign and
              survey responsiveness and evaluate page response rates.
              <br />
              (iv) OBTAIN THIRD PARTY SERVICES:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We also share Personal
              Information and Other Information with third parties who provide
              services to Royal Enfield website management, information
              technology and related infrastructure provision, customer service,
              e-mail delivery, auditing, and other similar services. When Royal
              Enfield shares Personal Information with third party service
              providers, we require that they use your Personal Information and
              Other Information only for the purpose of providing services to us
              and subject to terms consistent with this policy.
              <br />
              <br />
              3. FAIRNESS AND PURPOSE
              <br /> Royal Enfield will collect adequate, relevant and necessary
              Personal Information, and will process such information fairly and
              lawfully for the purpose it is collected. The purpose of
              collection will be specified not later than at the time of data
              collection, or on each occasion of change of purpose.
              <br />
              <br />
              4. DISTRIBUTION OF INFORMATION&
              <br />
              4.1 INFORMATION DISCLOSURE
              <br /> Royal Enfield does not share, sell, rent, or trade personal
              information collected through its “www.royalenfield.com” with
              third parties for their sole promotional purposes or as otherwise
              outlined in this Privacy Policy. Royal Enfield may share
              information with third party service providers contracted to
              provide services on our behalf for processing to provide your
              employment related services and benefits and other business
              purposes. These third party service providers may only use
              information we provide to them as requested and instructed by
              Royal Enfield.
              <br />
              <br />
              (i) Royal Enfield may disclose your Personal
              <br />
              Information as we believe to be necessary or appropriate:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;a) under applicable law, including laws
              outside your country of residence; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;b) to comply with legal process;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;c) to respond to requests from public and
              government authorities, including public and government
              authorities outside your country of residence, for national
              security and/or law enforcement purposes;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;d) to enforce our terms and conditions;
              and
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;e) to allow us to pursue available
              remedies or limit the damages that we may sustain.
              <br /> <br />
              (ii) Additionally, in the event of a reorganization, merger, sale,
              joint venture, assignment, transfer or other disposition of all or
              any portion of our business, assets or stock (including in
              connection with any bankruptcy or similar proceedings), we may
              transfer the Personal Information we have collected to the
              relevant third party.
              <br />
              <br />
              (iii) We may share information with governmental agencies or other
              companies assisting us in fraud prevention or investigation.
              <br />
              We may do so when: <br />
              &nbsp;&nbsp;&nbsp;&nbsp;a) permitted or required by law; or,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;b) trying to protect against or prevent
              actual or potential fraud or unauthorized transactions; or, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;c) investigating fraud which has already
              taken place. The information is not provided to these companies
              for marketing purposes.
              <br />
              <br />
              If Royal Enfield goes through a business transition, such as a
              merger, acquisition by another company, or sale of all or a
              portion of its assets, your personal information collected through
              our website(s) may be among the assets transferred. A prominent
              notice will appear on our website(s) for 30 days after any such
              change in ownership or control of your personal information.
              <br />
              <br /> To improve your Web experience, and to offer you products
              in which you might be interested, we provide links to business
              alliance companies, Royal Enfield dealers, and other third-party
              sites. When you click on these links, you will be transferred out
              of our Web site and connected to the Web site of the organization
              or company that you selected. Because Royal Enfield does not
              control these sites (even if an affiliation exists between our Web
              sites and a third party site), you are encouraged to review their
              individual privacy notices. If you visit a Web site that is linked
              to our sites, you should consult that site&rsquo;s privacy policy
              before providing any Customer Identifiable Information. Royal
              Enfield does not assume any responsibility or liability in elation
              with conduct of such third parties.
              <br />
              <br />
              4.2 CROSS-BORDER DATA TRANSFERS
              <br />
              When conducting business, working on Company projects, or
              implementing new processes or systems, an operation may require
              the transfer of personal information to other entities or third
              parties that are located outside of the Royal Enfield operation’s
              country of business including of third world countries.
              <br />
              <br />
              5. CONSENT AND CONTROL
              <br /> 5.1 CONSENT <br />
              Consent is often referred to as an individual&rsquo;s choice to “opt-in”
              or “opt-out” of the Company&rsquo;s use of personal information and is
              usually obtained by a “check box” or signature confirming the
              individual understands and agrees to the processing of their
              personal information. At times, express written consent from the
              individual may be required based on the information processing
              activity. Royal Enfield receives consent from individuals prior
              to: <br />
              &nbsp;&nbsp;(i)&nbsp;Collecting, using, or processing their
              personal information, including sensitive personal information, in
              certain ways or sharing the individual&rsquo;s personal information with
              any third party;
              <br /> &nbsp;&nbsp;(ii)&nbsp;Transferring the individual&rsquo;s
              personal information outside of the individual&rsquo;s country of
              residence
              <br /> &nbsp;&nbsp;(iii)&nbsp;Using or placing web cookies on an
              individual&rsquo;s computer or other electronic devices. All European
              Union residents under the General Data Protection Regulations, at
              all times have the option to stop Royal Enfield from using their
              personal information by unsubscribing clicking here or to be
              forgotten and requiring your information to be expunged from Royal
              Enfield records by contacting myprivacy@royalenfield.com.
              <br />
              <br />
              5.2 CONTROL OF YOUR INFORMATION
              <br /> Royal Enfield also provides individuals with the right to
              control their personal information, which includes the right to
              access, modify, erase, restrict, transmit, or object to certain
              uses of their information. You may request to review, correct,
              update, suppress, or otherwise modify any of your Personal
              Information that you have previously provided to us through “
              www.royalenfield.com”, or object to the use or processing of such
              Personal Information by us. If you have concerns regarding access
              to or the correction of your Personal Information, please contact
              us at privacy contact information mentioned within Section 11
              “Privacy Contact Information” of this policy. In your request,
              please make clear what Personal Information you would like to have
              changed, whether you would like to have your Personal Information
              that you have provided to us suppressed from our database or
              otherwise let us know what limitations you would like to put on
              our use of your Personal Information that you have provided to us.
              While the majority of questions and issues related to access can
              be handled quickly, complex requests may take more research and
              time. In such cases, issues will be addressed, or you will be
              contacted regarding the nature of the problem and appropriate next
              steps, within thirty days.
              <br />
              <br />
              6. DATA STORAGE
              <br /> Royal Enfield may transfer your information from “
              www.royalenfield.com” to other databases and store it on Royal
              Enfield or other supplier systems. Royal Enfield ensures
              appropriate security controls while storing data on its or its
              suppliers systems.
              <br />
              <br />
              7. COMMITMENT TO DATA SECURITY <br />
              Your personally identifiable information is kept secure. Only
              authorized employees, business partners, clients, vendors and
              other third party providers (who have agreed to keep information
              secure and confidential) have access to this information. Royal
              Enfield ensures that our supplier employs industry standard
              security measures to ensure the security of information through
              legally binding terms and conditions. However, users of our “
              www.royalenfield.com” are responsible for maintaining the security
              of any password, user ID, or other form of authentication involved
              in obtaining access to password protected or secure areas of any
              Workday websites. Access to and use of password protected and/or
              secure area of “ www.royalenfield.com” is restricted to authorized
              users only. Unauthorized access to such areas is prohibited and
              may lead to criminal prosecution.
              <br />
              <br />
              USE OF COOKIES
              <br />
              <br /> As is the case with many sites, when you visit our site and
              complete a registration form, we will place a &quot;cookie&quot;
              on your computer, which helps us identify you more quickly when
              you return. We will not use &quot;cookies&quot; or other devices
              to follow your click stream on the Internet generally, but will
              use them, and other devices, to determine which pages or
              information you find most useful or interesting at our own Web
              sites. Most browsers permit you to refuse to accept a
              &quot;cookie&quot; offered by a Web site. You will not be denied
              access to any part of the website on account of your refusal to
              accept a &quot;cookie,&quot; but your transactions through this
              Web site may be delayed due to the time it takes you to re-enter
              basic information necessary to complete a transaction. Should you
              choose to unsubscribe or to be forgotten, the cookies will be
              disabled. For more information about cookies and its usage visit
              our cookie policy. <br />
              <br />
              8. RETENTION AND DISPOSAL
              <br /> Royal Enfield Personal information shall be retained only
              as long as necessary for the fulfillment of the stated purposes,
              and should be disposed thereafter. We will retain your information
              for as long as your account is active or as needed to provide you
              services. If you wish that we no longer use your information to
              provide you services, contact us via the information provided in
              section 11 of this privacy policy. We will respond to your request
              within 30 days of receipt of the request. We will retain and use
              your information as necessary to comply with our legal
              obligations, resolve disputes, and enforce our agreements. <br />
              <br />
              9. SUPPLIER OBLIGATIONS
              <br /> Our suppliers for “ www.royalenfield.com” and therein being
              the custodian ofinformation will be liable for management of the
              following: <br />
              &nbsp;&nbsp;1. security of the personal information <br />
              &nbsp;&nbsp;2.appropriate retention and disposal of personal
              information <br />
              &nbsp;&nbsp;3.appropriate storage of personal information <br />
              <br />
              10. YOUR CONSENT Your consent to personal data collection and
              processing may be revoked by notifying us via our contact page.
              For users below the age of 16, the consent should be provided by
              the holder of parental responsibility of the child.
              <br />
              Please note, in case you choose to not provide us with the consent
              or withdraw the consent at any given point of time, we shall not
              be able to provision the services as detailed in section 2.2 of
              this policy.
              <br />
              <br />
              11. PRIVACY CONTACT INFORMATION
              <br /> If you have any questions regarding our privacy policy or
              if you need to update, change or remove information, you can do so
              by contacting us by email addressed to myprivacy@royalenfield.com.
              <br />
              <br />
              12. CHANGES TO THIS PRIVACY POLICY
              <br /> This Privacy Policy may be amended by Royal Enfield from
              time to time.
              <br />
              <br />
              13. GRIEVANCE REDRESSAL MECHANISM
              <br /> Any complaints or concerns with regards to content and or
              comment or breach of these terms shall be immediately informed to
              the designated Grievance Officer as mentioned below via in writing
              or through email signed with the electronic signature to.
              <br />
              <br />
              Grievance Redressal Officer
              <br /> Name: Ayush Bisht
              <br />
              Email: ayush@royalenfield.com
              <br />
              Plot No. 96, Near Jharsa Chowk, Sector 32
              <br />
              Gurugram - 122001
              <br />
              Haryana
            </p>
          </div>

          <hr className="privacy_divider" />

          <button className="privacy_footerButton" onClick={onClose}>
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
