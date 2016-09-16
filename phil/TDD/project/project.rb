class Project
    attr_accessor :name, :description, :team
    def initialize(name, description)
        @name = name
        @description = description
        @team = []
        self
    end
    def elevator_pitch
        "#{@name}, #{@description}"
    end
    def add_to_team(name)
        @team << name
        self
    end
end
