# proposed changes

Hard to know.  I'd like to know who the target audience was and what the site was trying to do.

- With this in mind, I'd make sure that the information architecture provide some value in that area.
- Styles could match the audience's taste, etc.

## it's a nice, clean site, but it's fairly generic

- feels like a magazine site, but doesn't employ overlays, line/wall-breaking etc.

- I'd try to add something unusual to make it stand out.

  - tbf, it's dependent on the type of people who would use the site... but for a trendy magazine style...
  - text-gradients?  (would require coloured text, so perhaps not)
  - masks? image masking content/blends (e.g. forest growing into overlay text)
  - look at latest CSS ideas/examples, see what fits.
  - check out show-off code examples...
  - nothing obvious occurs, but maybe some focus-oriented underlay, shadow or gradient

- No carousels.  

  - Pagination is fine and Carousels are shite.

- search bar that auto-replaces content (maybe only ATF).
- authors present on all articles?  
- image swapping

  - e.g.  replace images with other images from same articles.
  - only works with image-oriented sites

- background image/svg

  - asymmetric design

## mobile-first

I would use the pixel-specific breakpoints as guides only and re-architect it to upgrade gracefully.
Append horizontal content as design looks empty, lost or too wide.
Utilise CSS Grid more thoroughly (see Responsive Mondrian).  

- Providing better support/content coverage on non-standard devices or rotated screens.

## definite

- proper pagination

  - Pagination can include article count or page numbering.
  - Infini-paginate/scroll is wearing thin.
  - changing arrow state

    - to show when pagination can occur

- transition animations on pagination

  - fade-out/in
  - slider?

- nightmode on toggle button

  - under avatar menu
  - or as a subtle navbar icon (sun/moon)

- service worker

  - caching strategy (network first or content?)
  - image-loading anims

- separate HN main/side-bar and operate pagination via observable.

  - remove hacky 'hide item 3' CSS.

## Possibles

- image borders

  - something to break the lines

    - get away from rounded edges and rectangles

- custom fonts?

- could have used slot-based components to increase re-use of code.

  - these components are probably a fairly good fit for slots use-case.
  - but gives many reasons for change (to single component).
  - not as single-responsibility as I would like.
