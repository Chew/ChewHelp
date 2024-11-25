---
title: /stopgame Command
description: Stopgame Command for the MLB Game Feed Discord Bot
---
import { StopGameCommand } from "../../../../../src/components/mlb/StopGameCommand";

# `/stopgame` Command

This command force-stops an actively running game. The game will stop on its own when the game state is set to "Final" or "Suspended."

## Example

<StopGameCommand />
