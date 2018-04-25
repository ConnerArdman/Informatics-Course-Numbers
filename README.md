# Informatics Course Number Converter Chrome extension
## Conner Ardman
---

This is a chrome extension to convert new Informatics course numbers to their old ones.

After loading a UW page, the extension should automatically convert course numbers.
However, some issues can occur with dynamically loaded pages. If this happens,
press the convert button on the extension. Non UW pages are excluded to prevent
slowing down regular browsing.

Course Number Conversion Table From Here:
https://ischool.uw.edu/programs/informatics/curriculum/course-information/2018-changes

---

Known bugs:
1. The title tag does not always update when it is dynamically changed.
2. The plugin watches for changes to the DOM. This means that it can cause
some redundant calls whenever there are a lot of courses on one page. This doesn't
tend to cause too many issues though.
