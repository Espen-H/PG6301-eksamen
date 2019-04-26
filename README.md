# PG6301-eksamen

Test coverage as of 26/04/19 05:30 is at 37.31%

This is a really underdeveloped social media platform. I went with the same structure that was used in this course as it was families, and playing it safe with the timeframe in mind.

*In the documentation, you need to explain what your project does, how it is structured, how you implemented it and which different technologies you did choose to use. Think about it like a “pitch sale” in which you want to show a potential employer what you have learned in this course.*

## Check-list
    [] DONT zip with node_modules, dist, target... folders. Only project root, src, tests, public
    [] use ZIP not 7z, .tar...
    [] zip named: pg6301_<student>.zip eg pg6301_123456.zip
    [] NO empty spaces in file names. eg "file one.js" etc..

## Instructions how to run
run `command x y z..`

Any special login credentials needed?

## Extra packages?
I lost track and the lack of sleep is killing me

## Special scripts?
None outside of what was provided in the assignment.

## Requirements not finished
*Some parts of the exam are not completed, but it is not specified in the “readme.md” file. For example, if you do not have working web-sockets, you MUST state so in the readme.md, e.g., “Requirements for a B grade were not satisfied because I did not include web-sockets”.*

     
    1. A user should be able to post new messages on his/her “timeline”, which should be displayed in
    chronological order together in the same page with the user’s info.

    


    2. Should be possible to search for existing users.

    3. Users can send “friendship” requests to other users. This latter will decide whether to accept it or
    not.

    4. Two friends can see each other timeline / user-details, but not the ones of the other users they
    are not friend with.

    5. The home of a user will be the merged timeline of all of his/her friends, in chronological order,
    updated in real-time (e.g., using WebSockets).

    6. Should have a live-chat (using WebSockets) for friends.

    7.  When a message contains a URL (e.g., link to an external web page), that should be displayed as
    an actual clickable link. Pay particular attention to the security aspects of having such a
    functionality.