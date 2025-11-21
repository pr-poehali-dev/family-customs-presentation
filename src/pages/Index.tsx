import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'traditions' | 'achievements'>('traditions');

  const traditions = [
    {
      id: 1,
      title: 'Воскресные семейные ужины',
      description: 'Каждое воскресенье вся семья собирается за одним столом, делится историями недели и готовит любимые блюда вместе.',
      icon: 'Utensils'
    },
    {
      id: 2,
      title: 'Летний семейный отпуск',
      description: 'Ежегодная поездка всей семьей на море или в горы. Время для отдыха, приключений и создания незабываемых воспоминаний.',
      icon: 'Palmtree'
    },
    {
      id: 3,
      title: 'Празднование дней рождения',
      description: 'Особенный день для каждого члена семьи с традиционными блюдами, подарками и тёплыми пожеланиями.',
      icon: 'Cake'
    },
    {
      id: 4,
      title: 'Вечерние настольные игры',
      description: 'Традиционные пятничные вечера с настольными играми, когда вся семья отдыхает и веселится вместе.',
      icon: 'Gamepad2'
    }
  ];

  const achievements = [
    {
      id: 1,
      member: 'Папа',
      achievement: 'Победа в городском турнире по шахматам',
      year: '2024',
      description: 'Первое место среди 50 участников',
      icon: 'Trophy'
    },
    {
      id: 2,
      member: 'Мама',
      achievement: 'Публикация книги рецептов',
      year: '2023',
      description: 'Авторская книга семейных рецептов, передаваемых из поколения в поколение',
      icon: 'BookOpen'
    },
    {
      id: 3,
      member: 'Старший сын',
      achievement: 'Золотая медаль в школе',
      year: '2024',
      description: 'Отличник учёбы на протяжении всех лет обучения',
      icon: 'Medal'
    },
    {
      id: 4,
      member: 'Младшая дочь',
      achievement: 'Первое место на конкурсе рисунков',
      year: '2024',
      description: 'Победа в городском конкурсе детского творчества',
      icon: 'Palette'
    },
    {
      id: 5,
      member: 'Бабушка',
      achievement: 'Мастер-класс по вязанию',
      year: '2023',
      description: 'Провела серию мастер-классов в местном центре культуры',
      icon: 'Heart'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-primary/10 rounded-full">
            <Icon name="Home" size={32} className="text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Наша Семья
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            История, традиции и достижения, которые делают нас единым целым
          </p>
        </header>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            size="lg"
            variant={activeSection === 'traditions' ? 'default' : 'outline'}
            onClick={() => setActiveSection('traditions')}
            className="gap-2 text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <Icon name="Calendar" size={24} />
            Семейные традиции
          </Button>
          <Button
            size="lg"
            variant={activeSection === 'achievements' ? 'default' : 'outline'}
            onClick={() => setActiveSection('achievements')}
            className="gap-2 text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <Icon name="Award" size={24} />
            Достижения
          </Button>
        </div>

        {activeSection === 'traditions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {traditions.map((tradition, index) => (
              <Card 
                key={tradition.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name={tradition.icon} size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{tradition.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {tradition.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'achievements' && (
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.id} 
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-slide-in-left"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-accent/20 rounded-full">
                      <Icon name={achievement.icon} size={32} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <CardTitle className="text-2xl">{achievement.member}</CardTitle>
                        <Badge variant="secondary" className="text-sm px-3 py-1">
                          {achievement.year}
                        </Badge>
                      </div>
                      <CardDescription className="text-xl font-semibold text-foreground mb-2">
                        {achievement.achievement}
                      </CardDescription>
                      <p className="text-muted-foreground text-base">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}

        <footer className="mt-20 text-center">
          <Card className="inline-block px-8 py-6 bg-primary/5 border-2">
            <p className="text-lg text-muted-foreground flex items-center gap-3 justify-center">
              <Icon name="Heart" size={24} className="text-red-500 animate-pulse" />
              <span className="font-semibold">Вместе мы — сила!</span>
              <Icon name="Heart" size={24} className="text-red-500 animate-pulse" />
            </p>
          </Card>
        </footer>
      </div>
    </div>
  );
};

export default Index;