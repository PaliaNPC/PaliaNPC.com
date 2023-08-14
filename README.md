# PaliaNPC.com

Missing features that I would love some help with:

1 - Checkbox for "Have I gifted this NPC today?" next to each of the NPC names.

<input> id's npcX in the html file
Looking to set a cookie if ticked, cookie removed/set to false if unticked. 
Ideally this would be a timestamped cookie. Palia NPC gifting resets at 12:00AM ET (or 04:00 UTC).
If a user ticks the checkbox on Day 1, when they revisit the site on Day 2, this will be unchecked again. However, if the user visits the site on Day 1 again but before the 12:00AM ET reset, the site remembers the box should be checked.

2 - Weekly reset at Monday 12:00AM ET (00:04 UTC)

Currently I handle weekly resets by changing all of the input ids to a different number than the week before. For example, Week 1 = 'task1' -> 'task92'. Instead of checking for timestamped cookies, when the weekly reset happens on Monday, when Week 2 rolls around I change all the <input> ids to 'task93' -> 'task184'.
This is a sloppy way to do it, I'm sure. Ideally I'd have the site check to see if the cookies sit within a given gifting week or not and reset after Monday 12:00AM ET (04:00 UTC). I ;lack the know how to do this.
