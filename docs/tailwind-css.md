# Tailwind CSS


## State Change
Dynamically select a complete class name.
``` HTML
<!-- HTML -->
<div :class="{{ .Offer.Error ? 'text-red-600' : 'text-green-600' }}">{{.Offer.Text}}</div>
```
