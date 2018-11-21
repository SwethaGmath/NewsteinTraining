import { CrisisCentreRoutingModule } from './crisis-centre-routing.module';

describe('CrisisCentreRoutingModule', () => {
  let crisisCentreRoutingModule: CrisisCentreRoutingModule;

  beforeEach(() => {
    crisisCentreRoutingModule = new CrisisCentreRoutingModule();
  });

  it('should create an instance', () => {
    expect(crisisCentreRoutingModule).toBeTruthy();
  });
});
