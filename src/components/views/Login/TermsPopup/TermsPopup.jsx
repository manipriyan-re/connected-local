import React from "react";
import Image from "next/image";
import "./termsPopup.scss"; // Import SCSS
import Terms from "../../../../../public/images/terms.svg";
export default function TermsPopup({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="terms_overlay">
      <div className="terms_container">
        <div className="terms_content">
          <div className="terms_header">
            <div className="terms_titleWrapper">
              <Image src={Terms} alt="terms" className="terms_icon" />

              <h1 className="terms_title">Terms and Conditions</h1>
            </div>
            <button className="terms_closeButton" onClick={onClose}>
              <span>✖</span>
            </button>
          </div>

          <p className="terms_subtitle">According to 2024 rights</p>
          <hr className="terms_divider" />

          <div className="terms_body">
            <p>
              Welcome to the website of Royal Enfield, a unit of Eicher Motors
              Limited. Royal Enfield provides this Site as a service to its
              customers. Please review the following basic rules that govern
              your usage of the Site. Although you may a particular portion of
              this Site and thereby bypass this Agreement, your use of this Site
              still binds you to the terms. Since Royal Enfield may revise this
              Agreement at any time, you should visit this page periodically to
              review the terms of your usage.
              <br />
              <br />
              SITE CONTENTS
              <br />
              <br />
              Occasionally there may be information on this website that
              contains typographical errors, inaccuracies, or omissions that may
              relate to product descriptions, pricing, and availability. We
              reserve the right to correct any errors, inaccuracies or omissions
              and to change or update information at any time without prior
              notice. We apologize for any inconvenience this may cause.
              <br />
              Unless otherwise noted, all materials, including images,
              illustrations, designs, icons, photographs, video clips and
              written and other materials that are part of this Site
              (collectively, the &apos;Contents&apos;) are copyrights,
              trademarks, trade dress and/or other intellectual property owned,
              controlled or licensed by Royal Enfield. The Site as a whole is
              protected by copyright, all worldwide rights, titles and interests
              in and to which are owned by Royal Enfield. ROYAL ENFIELD and our
              other trademarks appearing at this Site are the trademarks of
              Eicher Motors Limited.This Site and all its Contents are intended
              solely for personal, non-commercial use. You may download or copy
              the Contents and other downloadable materials displayed on the
              Site for your personal use only. No right, title or interest in
              any downloaded materials or software is transferred to you as a
              result of any such downloading or copying. You may not reproduce
              (except as noted above), publish, transmit, distribute, display,
              modify, create derivative works from, sell or participate in any
              sale of or exploit in any way, in whole or in part, any of the
              Contents, the Site or any related software.
              <br />
              <br />
              USER COMMENTS, FEEDBACK,POSTCARDS AND OTHER SUBMISSIONS <br />
              <br />
              All comments, feedback,postcards, suggestions, ideas, and other
              submissions disclosed, submitted or offered to Royal Enfield on or
              by this Site or otherwise disclosed, submitted or offered in
              connection with your use of this Site (collectively, the
              &quot;Comments&quot;) shall be and remain Royal Enfield&apos;s
              property. Such disclosure, submission or offer of any Comments
              shall constitute an assignment to Royal Enfield of all worldwide
              rights, titles and interests in all copyrights and other
              intellectual properties in the Comments. Thus, Royal Enfield will
              own exclusively all such rights, titles and interests and shall
              not be limited in any way in its use, commercial or otherwise, of
              any Comments. Royal Enfield is and shall be under no obligation
              <br />- to maintain any Comments in confidence; <br />- to pay
              compensation to any user for any Comments; or
              <br />- to respond to any user Comments. <br />
              You agree that no Comments submitted by you to the Site will
              violate any right of any third party, including copyright,
              trademark, privacy or other personal or proprietary right(s). You
              further agree that no Comments submitted by you to the Site will
              be or contain libelous or otherwise unlawful, abusive or obscene
              material. You are and shall remain solely responsible for the
              content of any Comments you make.
              <br />
              <br />
              COLORS
              <br />
              <br />
              We have made every effort to display as accurately as possible the
              colors of our products that appear at the Site. However, as the
              actual colors you see will depend on your monitor, we cannot
              guarantee that your monitor{"'"}s display of any color will be
              accurate.
              <br />
              <br />
              DISCLAIMER <br />
              <br />
              Royal Enfield provides the materials on this site {'"'}as is{'"'}{" "}
              without warranties of any kind, either express or implied,
              including without limitation, warranties of title, implied
              warranties of merchantability, fitness for a particular purpose or
              non-infringement of intellectual property. Royal Enfield expressly
              disclaims any duty to update or revise the materials on this site,
              although Royal Enfield may modify the materials at any time
              without notice. By your use of this site, you acknowledge that
              your use is at your sole risk and that you assume full
              responsibility for all costs associated with all necessary
              servicing or repairs of any equipment you use in connection with
              your use of this site. You further acknowledge that Royal Enfield
              shall not be liable for any damages or any kind related to your
              use of this site.
              <br />
              All contributions made to this website in written, photographic or
              other form will become the sole property of Royal Enfield.
              Consequently, Royal Enfield will hold the rights to use the same
              in any manner deemed fit, online or offline.
              <br />
              The Trip experiences and discussions posted in the website are not
              endorsed by Royal Enfield for content or veracity. Moreover, Royal
              Enfield does not take responsibility for any actions inspired by
              content presented here. Royal Enfield strongly discourages riding
              under the influence of alcohol or any other hallucinogenic
              substance. We strongly urge you to follow road rules, wear a
              helmet, and only use your motorcycle as it was designed to be
              used. Modifications to the chassis and engine are not advisable,
              since they could compromise your safety. Please enjoy your
              motorcycle and the great outdoors responsibly.
              <br />
              We may occasionally ask for your assistance in market research to
              help improve our services to customers. Your personal data that
              you provide in the form may be shared for these purposes with
              other authorized Royal Enfield partners and suppliers of Royal
              Enfield approved products and services. We would like to contact
              you via phone, SMS and/or email. You can tell us at any time if
              you would prefer NOT to receive this information; please write to
              us at support@royalenfield.com.
              <br />
              <br />
              INDEMNIFICATION
              <br />
              <br />
              You agree to defend, indemnify and hold Royal Enfield harmless
              from and against any and all claims, damages, costs and expenses,
              including fees, arising from or related to your use of the Site.
              <br />
              <br />
              MISCELLANEOUS
              <br />
              <br />
              Unless otherwise specified, this Site and the Contents thereof are
              displayed solely for the purpose of promoting Royal Enfield{"'"}s
              products and services. This Site is controlled and operated by
              Royal Enfield from its office in Chennai, India.The Courts in
              Chennai shall have jurisdiction over all disputes arising out of
              or in respect of this Agreement.
              <br />
              <br />
              PRIVATE IMPORTS
              <br />
              <br />
              We also do not encourage private imports of Indian models through
              our Indian dealers. If you have done so, please note it is at your
              own risk. If you face any problems with registering your privately
              imported motorcycle or haven{"'"}t received your motorcycle we
              cannot be held responsible or liable for this.
              <br />
              <br />
              TERMINATION
              <br />
              <br />
              These terms are effective unless and until terminated by either
              you or Royal Enfield. You may terminate this Agreement at any
              time. Royal Enfield also may terminate this Agreement at any time
              and may do so immediately without notice, and accordingly deny you
              access to the Site, if in Royal Enfield{"'"}s sole discretion you
              fail to comply with any term or provision of this Agreement. Upon
              any termination of the Agreement by either you or Royal Enfield,
              you must promptly destroy all materials downloaded or otherwise
              obtained from this Site, as well as all copies of such materials,
              whether made under the terms of use or otherwise.
              <br />
              <br />
              CANCELLATION OF ONLINE VEHICLE BOOKING
              <br />
              <br />
              Cancellation before final billing entitles you to a full refund.
              Customer shall not receive any refunds online or reversal in their
              accounts. Refund will be through A/C payee cheque to the booking
              name only.
            </p>
          </div>

          <hr className="terms_divider" />

          <button className="terms_footerButton" onClick={onClose}>
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
