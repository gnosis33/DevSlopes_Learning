class Monster:
    def __init__(self, health, enegry, **kwargs):
        self.health = health
        self.energy = enegry
        super().__init__(**kwargs)

class Fish:
    def __init__(self, speed, scales):
        self.speed = speed
        self.scales = scales
        super().__init__(**kwargs)