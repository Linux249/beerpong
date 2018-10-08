# beerpong

Design

## Routes

### /teams 
- Label: Search teams + Input: Find a team
- List of found Teams with Links to /team/id
- Button: Create Team

### /teams/create
- Label: choose a name for yout team + Input: Team Name 
- Button: Create
- redirect to /team

### /team/id
- Show Team Member
- Later: Turnaments, Wins, Rate, 

### /team
- if not team chosen: Button: Create Team
- show List of Team Member
- - TeamAdmin (creater): Delete Member Button/Cross
- Button: Invite Team Member
- Input: Search User
- Later: statistics, rates, comming dates

### /login
- email
- password
- Sign in

### /register
- Player Name
- email
- password

### /tournaments
- list of going tournaments (left, wide, 5 + show more)
- List of coming tournamens (left, wide, 10 + show more)
- Create Tournament Button
- klick on /tournaments/id 

### /tournaments/create
- Turnament Name
- Items to select: Ruleset
- Regestration Time
- 

Ruleset 
- 16er/32er Teams
- Start Date/Week 
- K.O. 
  - 1. Week: 8/16 Games
  - 2. Week: 4/8 Games
  - 3. Week: 2/4 Games
  - 4. Week: 1/2 Games
  - 4. Week: 0/1 Games
- Groups
  - 4x4/8x4
  - 3 weeks Rounds (1-2, 3-4, 1-3, 2-4, 1-4, 2-3)
  - 2 best go K.O.: 8/16 Teams
- Choose which weeks are at "home" and which get an extra Event

### /tournaments/id
- ...
