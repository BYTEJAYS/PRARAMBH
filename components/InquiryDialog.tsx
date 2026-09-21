"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function InquiryDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="floating-enquire" type="button"><span>Enquire</span><b>↗</b></button>
      </DialogTrigger>
      <DialogContent className="inquiry-dialog" showCloseButton>
        <p className="section-index">A private conversation</p>
        <DialogTitle className="dialog-title">Tell us about your<br /><em>next space.</em></DialogTitle>
        <DialogDescription className="dialog-description">Share a few details and your preferred project. We will continue the conversation personally.</DialogDescription>
        <form className="inquiry-form" action="mailto:inframr02@gmail.com" method="post" encType="text/plain">
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
          <label>Interested in<select name="project" defaultValue=""><option value="" disabled>Select a project</option><option>Prarambh 51</option><option>Prarambh Pride</option><option>Prarambh Plaza</option></select></label>
          <button className="solid-button" type="submit">Start a conversation <span>↗</span></button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
