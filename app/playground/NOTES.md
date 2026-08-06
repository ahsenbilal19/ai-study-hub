# FE-05 Accessibility Notes

## Component Comparison

For this assignment I built three interactive components manually:

- Modal Dialog
- Tabs
- Disclosure

Afterwards, I installed shadcn/ui and compared my implementation with the generated source code.

---

## Dialog

My implementation includes:

- ARIA dialog role
- aria-modal
- aria-labelledby
- Escape key support
- Initial focus on dialog

shadcn additionally handles:

- Focus trapping inside the dialog
- Returning focus to the trigger when closed
- Portal rendering
- Better component composition
- Built-in accessibility behavior through Base UI
- Smooth animations and focus-visible styles

---

## Tabs

My implementation includes:

- WAI-ARIA roles
- Active tab state
- Arrow key navigation
- Tab panels

shadcn additionally provides:

- More complete keyboard support
- Disabled tab support
- Horizontal and vertical layouts
- Better focus indicators
- Variant styling
- More reusable architecture

---

## What I Learned

Building the components manually helped me understand why accessibility patterns exist before relying on component libraries.

I also learned that libraries such as shadcn/ui do much more than provide styling—they solve many accessibility edge cases including focus management, keyboard navigation, and reusable component composition.