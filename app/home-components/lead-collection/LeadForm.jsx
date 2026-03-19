"use client";
import Button from "@/components/ui/Button";
import { Paperclip } from "lucide-react";
import { useState } from "react";

const styles = {
  formContainer: "flex items-center justify-center",
  formCard: "w-full bg-white p-6 rounded-2xl",
  form: "space-y-4",
  label: "text-sm font-medium text-gray-700",
  input:
    "w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5d2be9] text-sm mt-1 transition duration-200",
  gridTwoCol: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  select:
    "w-full border border-gray-300 rounded-xl px-4 py-3 appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5d2be9] text-sm mt-1 transition duration-200 cursor-pointer text-gray-500",
  option: "text-gray-900",
  selectArrowContainer:
    "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 mt-1",
  selectArrow: "fill-current h-4 w-4",
  textarea:
    "w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#5d2be9] text-sm mt-1 transition duration-200",
  attachmentContainer: "pt-2",
  attachmentLabel: "flex items-center gap-3 cursor-pointer group w-fit",
  attachmentIconContainer:
    "p-3 rounded-full bg-[#f3f0f7] text-[#5d2be9] group-hover:bg-[#d3cce5] transition-colors",
  attachmentText:
    "text-sm font-medium text-[#0e121d] group-hover:text-[#5d2be9] transition-colors",
  attachmentSubText: "text-xs text-gray-500",
  attachmentInput: "hidden",
  button: "w-full mt-4",
};

export default function LeadForm() {
  const [category, setCategory] = useState("");

  // Placeholder function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic goes here
    console.log("Form submitted. Category:", category);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Full Name (Full Width) */}
          <div>
            <label htmlFor="full-name" className={styles.label}>
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              placeholder="ex. chris evans"
              className={styles.input}
              required
            />
          </div>

          {/* Email and Phone Number (Two Columns on small screens and up) */}
          <div className={styles.gridTwoCol}>
            <div>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="ex. cevans@email.com"
                className={styles.input}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+88 013 45217522"
                className={styles.input}
              />
            </div>
          </div>

          {/* Organization and Category (Two Columns on small screens and up) */}
          <div className={styles.gridTwoCol}>
            <div>
              <label htmlFor="organization" className={styles.label}>
                Organization
              </label>
              <input
                id="organization"
                type="text"
                placeholder="ex. Ab group"
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="category" className={styles.label}>
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={styles.select}
                  required
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="web-dev" className={styles.option}>
                    Web Development
                  </option>
                  <option value="mobile-dev" className={styles.option}>
                    Mobile App Development
                  </option>
                  <option value="ui-ux" className={styles.option}>
                    UI/UX Design
                  </option>
                  <option value="consulting" className={styles.option}>
                    Consulting
                  </option>
                </select>
                {/* Custom dropdown arrow */}
                <div className={styles.selectArrowContainer}>
                  <svg
                    className={styles.selectArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message (Full Width Textarea) */}
          <div>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type Messages"
              rows="4"
              className={styles.textarea}
              required
            ></textarea>
          </div>

          {/* Attachment Section */}
          <div className={styles.attachmentContainer}>
            <label
              htmlFor="attachment-input"
              className={styles.attachmentLabel}
            >
              {/* Clip Icon (using SVG for high quality, styled in a light purple circle to match the visual feel) */}
              <div className={styles.attachmentIconContainer}>
                <Paperclip size={20} />
              </div>

              <div>
                <span className={styles.attachmentText}>Attachment</span>
                <p className={styles.attachmentSubText}>.doc & .PDF 3mb Max</p>
              </div>
            </label>
            {/* Hidden file input, linked to the label */}
            <input
              id="attachment-input"
              type="file"
              className={styles.attachmentInput}
              accept=".doc,.pdf"
            />
          </div>

          {/* Send Inquiry Button (Dark style from image: bg-[#181223]) */}
          <div>
            <Button
              variant="fill"
              size="md"
              type="submit"
              className={styles.button}
            >
              Send Inquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
